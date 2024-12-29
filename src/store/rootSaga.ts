import { all } from "redux-saga/effects";

import { questionsSaga } from "./questions/sagas";

export function* rootSaga() {
  yield all([questionsSaga()]);
}
