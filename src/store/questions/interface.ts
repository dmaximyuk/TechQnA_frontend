import { PayloadAction } from "@reduxjs/toolkit";

interface Item {
  tags: string[];
  title: string;
  text: string;
}

export interface QuestionsState {
  prepare: boolean;
  questionLength: number | null;
  question: number | null;
  items: Record<number, Item>;
}

export type NavigateQuestionPayload = PayloadAction<"next" | "back">;
export type SetPrepareDataPayload = PayloadAction<Record<number, Item>>;
