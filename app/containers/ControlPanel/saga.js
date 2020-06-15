// import { take, call, put, select } from 'redux-saga/effects';

import { call, takeLatest, put } from 'redux-saga/effects';
import request, { requestAPI } from '../../utils/request';
import { slideshowLoaded, slideshowLoadingFailed } from './actions';
import { SLIDESHOW_LOAD } from './constants';
// Individual exports for testing
export default function* controlPanelSaga() {
  yield takeLatest(SLIDESHOW_LOAD, fetchSlideshow);
  // See example in containers/HomePage/saga.js
}
export function* fetchSlideshow() {
  console.log('hello');
  try {
    const slideshow = yield call(requestAPI, '/slideshows?device_code=PPBqWA9');
    console.log(slideshow);
    yield put(slideshowLoaded(slideshow.data.slideshow));
  } catch (e) {
    yield put(slideshowLoadingFailed(e));
  }
}
