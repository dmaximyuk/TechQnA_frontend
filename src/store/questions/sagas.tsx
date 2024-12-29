import { all, call, put, takeLatest } from "redux-saga/effects";
import { gunzip, strFromU8 } from "fflate";

import questions from "@/assets/questions.techqna";

import { questionsActions } from "./index";

async function gunzipAsync(data: string) {
  const response = await fetch(data);
  const arrayBuffer = await response.arrayBuffer();
  const questionsData = new Uint8Array(arrayBuffer);

  return new Promise<Uint8Array<ArrayBufferLike>>((resolve, reject) => {
    gunzip(questionsData, (err, uncompressedData) => {
      if (err) reject(err);
      else resolve(uncompressedData);
    });
  });
}

function* prepareWorker(): Generator<ReturnType<any>, void, any> {
  try {
    const data = yield call(gunzipAsync, questions);
    const parsedData = strFromU8(data);
    const parsedJson = JSON.parse(parsedData);

    if (parsedData?.length >= 1) {
      yield put(questionsActions.setPrepareData(parsedJson));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* questionsSaga() {
  yield all([takeLatest(questionsActions.prepare, prepareWorker)]);
}
