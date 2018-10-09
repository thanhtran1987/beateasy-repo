import { combineReducers } from 'redux';
import next5RaceReducer from './next5RaceReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
  next5Race: next5RaceReducer,
  page: pageReducer,
});

export default rootReducer;
