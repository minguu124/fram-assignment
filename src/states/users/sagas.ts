import { get } from "lodash";
import { takeEvery, put, call } from "redux-saga/effects";
import { DEFAULT_LIMIT } from "src/constants/limit";
import UserService from "src/services/UserService";
import { Query } from "src/types/query.type";
import TaskAction, { ITask } from "src/types/taskAction.type";
import { IUser } from "src/types/user.type";
import { fetchUsers, createUser } from "./actions";
import { startUsers, usersSuccess, usersFail } from "./users.slice";

function* fetchUsersSaga({ payload }: ITask<Query>): any {
  try {
    yield put(startUsers());

    const res = yield call([UserService, "fetchUsers"], {
      ...payload,
      limit: DEFAULT_LIMIT,
      orderBy: "createdAt",
      order: "desc"
    } as Query);

    yield put(
      usersSuccess({ ...res, page: payload.page, limit: DEFAULT_LIMIT })
    );
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
  yield takeEvery<TaskAction<Query>>(fetchUsers.toString(), fetchUsersSaga);

  yield takeEvery<TaskAction<IUser>>(createUser.toString(), createUserSaga);
}
