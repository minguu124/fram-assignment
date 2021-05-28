import { all } from "redux-saga/effects";
import usersSagas from "./users/sagas";

export default function* rootSagas() {
  yield all([
    //
    usersSagas()
  ]);
}
