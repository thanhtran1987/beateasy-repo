import { call, put, takeLatest } from 'redux-saga/effects';

import { loadNext5Race } from '../actions/next5RaceAction';
import { next5RaceActionType } from '../../Helper/Constant';

function* next5RaceSaga(action: any) {
  try {
    const resp = yield call(loadNext5Race, action);
    if (resp.success) {
      yield put({ type: next5RaceActionType.SUCCESS, data: resp.result });
    } else {
      yield put({ type: next5RaceActionType.ERROR, error: resp.statusText });
    }
  } catch (e) {
    yield put({ type: next5RaceActionType.ERROR, error: e.message });
  }
}
export default function* next5RaceWatcherSaga() {
  yield takeLatest(next5RaceActionType.REQUEST, next5RaceSaga);
}
