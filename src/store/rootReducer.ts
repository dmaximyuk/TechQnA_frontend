import { combineReducers } from "@reduxjs/toolkit";

import { reducer as questions } from "./questions";

export const rootReducer = combineReducers({
  questions,
});

export type RootState = ReturnType<typeof rootReducer>;
