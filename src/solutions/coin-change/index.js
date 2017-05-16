/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  if (!coins.length) {
    return coinChange.NULL_VALUE;
  }
  const f = [...new Array(amount)].map(() => coinChange.NULL_VALUE);
  f[0] = 0;
  for (let i = 1; i <= amount; i += 1) {
    f[i] = Infinity;
    for (let j = 0; j < coins.length; j += 1) {
      const remainAmount = i - coins[j];
      if (remainAmount >= 0) {
        f[i] = Math.min(f[i], 1 + f[remainAmount]);
      }
    }
  }
  return f[amount] !== Infinity ? f[amount] : coinChange.NULL_VALUE;
};

coinChange.NULL_VALUE = -1;

export default coinChange;
