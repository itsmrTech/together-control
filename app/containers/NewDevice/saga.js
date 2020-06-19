// import { take, call, put, select } from 'redux-saga/effects';

import { put, takeLatest,call } from "redux-saga/effects";
import { requestAPI } from "../../utils/request";
import { paired, pairingFailed } from "./actions";
import { PAIR } from "./constants";

// Individual exports for testing
export default function* newDeviceSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(PAIR, pair);

}

export function* pair(action){
  try {
    const {pairing_code}=action;
    const result = yield call(requestAPI, '/devices/pair', { pairing_code }, "POST");
    console.log("api",result);
    // const {token,user}=result.data
    yield put(paired(result.data.device));
  } catch (e) {
    yield put(pairingFailed(e));
  }
}