import coinChange from './index';

it('coinChange', () => {
  expect(coinChange([1, 2, 5], 11)).toBe(3);
});

it('coinChange', () => {
  expect(coinChange([1], 0)).toBe(0);
});

it('coinChange', () => {
  expect(coinChange([2], 1)).toBe(-1);
});
