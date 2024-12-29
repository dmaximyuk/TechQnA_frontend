import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/store/rootReducer";
import type { QuestionsState, NavigateQuestionPayload } from "./interface";

const questionIdKey = "qId";
const defaultQuestionId = 1;

const initialState: QuestionsState = {
  prepare: true,
  question: null,
  items: {},
};

export const { reducer, actions } = createSlice({
  name: "questions",
  initialState,
  reducers: {
    prepare(state) {
      state.items = {};
      state.question = parseInt(
        localStorage.getItem(questionIdKey) || String(defaultQuestionId),
      );
      state.prepare = false;
    },
    navigateQuestion(state, payload: NavigateQuestionPayload) {
      if (typeof state.question === "number" && !Number.isNaN(state.question)) {
        switch (payload.payload) {
          case "next":
            state.question += 1;
            break;
          case "back":
            state.question -= 1;
            break;
        }

        localStorage.setItem(questionIdKey, String(state.question));
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
