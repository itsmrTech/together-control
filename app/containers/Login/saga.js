// import { take, call, put, select } from 'redux-saga/effects';

// import { take, call, put, select } from 'redux-saga/effects';

import { requestAPI } from "../../utils/request";
import { loginSucceed, loginFailed } from "./actions";
import { put, call, takeLatest } from "redux-saga/effects";
import { LOGIN } from "./constants";

// Individual exports for testing
export function* loginRequest(action) {
  try {
    const {email,password}=action;
    const result = yield call(requestAPI, '/users/login', { email, password }, "POST");
    console.log("api",result);
    const {token,user,devices}=result.data
    yield put(loginSucceed(token,user,devices));
  } catch (e) {
    yield put(loginFailed(e));
  }
}

// Individual exports for testing
export default function* loginSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN, loginRequest);

}
