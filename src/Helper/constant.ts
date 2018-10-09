// template action for basic async request
const genericAction = (data: string) => {
  return {
    REQUEST: data + '_REQUEST',
    SUCCESS: data + '_SUCCESS',
    ERROR: data + '_ERROR',
  };
};

// basic async action below
export const next5RaceActionType = genericAction('NEXT_5_RACE');

// advance async action below

// sychronious action below
export const pageActionType = {
  SETFILTER: 'SETFILTER',
};
