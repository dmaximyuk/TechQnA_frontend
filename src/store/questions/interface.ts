import { PayloadAction } from "@reduxjs/toolkit";

interface Item {
  title: string;
  text: string;
  tags: string[];
}

export interface QuestionsState {
  prepare: boolean;
  question: number | null;
  items: Record<number, { ru: Item; en: Item }>;
}

export type NavigateQuestionPayload = PayloadAction<"next" | "back">;
