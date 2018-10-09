import { all } from 'redux-saga/effects';

import next5RaceSaga from './next5RaceSaga';
import homePageSaga from './homePageSaga';

export default function* rootSaga() {
  yield all([next5RaceSaga(), homePageSaga()]);
}
