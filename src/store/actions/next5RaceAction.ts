import { next5RaceActionType } from '../../Helper/Constant';

export const getNext5Race = (data: number) => {
  return { type: next5RaceActionType.REQUEST, payload: data };
};
export const loadNext5Race = (data: any) => {
  let filter = 'next-to-jump';
  if (data.payload > 0) {
    // uncomment to activate api filtering
    //filter += '/' + data.payload;
  }

  return fetch(process.env.API_URL + '/bet-easy-code-challenge/' + filter).then(resp => {
    if (resp.status === 200) {
      return resp.json();
    }
    return resp;
  });
};
