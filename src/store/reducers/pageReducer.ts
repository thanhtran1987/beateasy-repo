import { Reducer } from 'redux';

import { initialState } from '../initialState';
import { pageActionType } from '../../Helper/Constant';

const pageReducer: Reducer<any> = (state = {}, action: any) => {
  switch (action.type) {
    case pageActionType.SETFILTER: {
      return { filter: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default pageReducer;
