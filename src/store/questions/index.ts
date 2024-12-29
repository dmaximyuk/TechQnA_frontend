import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/store/rootReducer";
import type {
  QuestionsState,
  NavigateQuestionPayload,
  SetPrepareDataPayload,
} from "./interface";

const questionIdKey = "qId";
const defaultQuestionId = 1;

const initialState: QuestionsState = {
  prepare: true,
  questionLength: null,
  question: null,
  items: {},
};

export const { reducer, actions } = createSlice({
  name: "questions",
  initialState,
  reducers: {
    prepare(state) {
      state.prepare = true;
    },
    setPrepareData(state, action: SetPrepareDataPayload) {
      const qId = parseInt(
        localStorage.getItem(questionIdKey) || String(defaultQuestionId),
      );

      state.items = action.payload;
      state.questionLength = Object.keys(action.payload).length;

      if (state.questionLength >= qId) {
        state.question = qId;
      } else {
        state.question = 1;
      }

      state.prepare = false;
    },
    navigateQuestion(state, action: NavigateQuestionPayload) {
      if (typeof state.question === "number" && !Number.isNaN(state.question)) {
        switch (action.payload) {
          case "next":
            if (
              !!state.questionLength &&
              state.questionLength > state.question
            ) {
              state.question += 1;
            } else {
              state.question = 1;
            }

            break;
          case "back":
            state.question -= 1;

            if (state.question < 1) {
              state.question = state.questionLength;
            }

            break;
        }

        localStorage.setItem(questionIdKey, String(state.question));
      }
    },
    copyCurrentQuestion(state) {
      if (
        !state.prepare &&
        state.question &&
        state.questionLength &&
        state.questionLength >= 1 &&
        state.items[state.question]
      ) {
        window.navigator.clipboard.writeText(
          `${state.items[state.question].title}\n\n${state.items[state.question].text}`,
        );
      }
    },
    clear(state) {
      state.items = initialState.items;
      state.prepare = initialState.prepare;
      state.question = initialState.question;
    },
  },
});

export { reducer as questionsReducer, actions as questionsActions };
export const questionsSelector = (state: RootState) => state.questions;
