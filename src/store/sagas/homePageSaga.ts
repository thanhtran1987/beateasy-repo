import { put, takeLatest } from 'redux-saga/effects';

import { pageActionType } from '../../Helper/Constant';
import { getNext5Race } from '../actions/next5RaceAction';

function* homePageSaga(action: any) {
  yield put(getNext5Race(action.payload));
}
export default function* homePageWatcherSaga() {
  yield takeLatest(pageActionType.SETFILTER, homePageSaga);
}
