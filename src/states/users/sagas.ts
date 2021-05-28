import { get } from "lodash";
import { takeEvery, put, call } from "redux-saga/effects";
import UserService from "src/services/UserService";
import TaskAction, { ITask } from "src/types/taskAction.type";
import { IUser } from "src/types/user.type";
import { fetchUsers, createUser } from "./actions";

import { startUsers, usersSuccess, usersFail } from "./users.slice";

function* fetchUsersSaga(): any {
  try {
    yield put(startUsers());

    const res = yield call([UserService, "fetchUsers"]);

    yield put(usersSuccess(get(res, "data", [])));
  } catch (e) {
    yield put(usersFail(e));
  }
}

function* createUserSaga({ payload }: ITask<IUser>) {
  try {
    yield put(startUsers());

    yield call([UserService, "createUser"], payload);

    yield put(usersSuccess(null));
  } catch (e) {}
}

export default function* usersSaga() {
  yield takeEvery<TaskAction<void>>(fetchUsers.toString(), fetchUsersSaga);

  yield takeEvery<TaskAction<IUser>>(createUser.toString(), createUserSaga);
}
