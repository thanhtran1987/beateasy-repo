import { Reducer } from 'redux';

import { next5RaceActionType } from '../../Helper/Constant';

const next5RaceReducer: Reducer<any> = (state = {}, action: any) => {
  switch (action.type) {
    case next5RaceActionType.REQUEST: {
      return { ...state, loading: true };
    }
    case next5RaceActionType.SUCCESS: {
      return { loading: false, data: action.data };
    }
    case next5RaceActionType.ERROR: {
      return { loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
};

export default next5RaceReducer;
