import { getCountDown } from '../shared';

const mockTest = [
  {
    value: 0,
    result: 'Expired',
  },
  {
    value: 9,
    result: '9s',
  },
  {
    value: 999,
    result: '16m 39s',
  },
  {
    value: 9999,
    result: '2h 46m',
  },
  {
    value: 99999,
    result: '1d 3h',
  },
];

describe('Helper/shared', () => {
  it('counter should display correct format', () => {
    mockTest.map((item: any) => {
      expect(getCountDown(item.value)).toEqual(item.result);
    });
  });
});
