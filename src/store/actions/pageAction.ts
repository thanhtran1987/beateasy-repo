import { pageActionType } from '../../Helper/Constant';

export const setFilter = (data: any) => {
  return { type: pageActionType.SETFILTER, payload: data };
};
