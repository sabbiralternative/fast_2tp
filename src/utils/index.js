const colorPlus = [
  { amount: 15 },
  { amount: 12 },
  { amount: 9 },
  { amount: 3 },
  { amount: 9 },
  { amount: 200 },
  { amount: 150 },
];

export const calculateTotalWin = (
  winner,
  winner_baccarat,
  winner_colorplus,
  payload
) => {
  let totalWin = 0;

  if (winner) {
    const player_a_b = payload?.find((p) => p.runner_name === winner);
    if (player_a_b) {
      totalWin += player_a_b?.price * player_a_b?.stake;
    }
  }

  if (winner_baccarat) {
    const w_b = payload?.find(
      (p) => p.runner_name === `baccarat${winner_baccarat}`
    );
    if (w_b) {
      totalWin += w_b?.price * w_b?.stake;
    }
  }
  if (winner_colorplus) {
    const findAPlusPrice = colorPlus?.find(
      (a) => a.amount === parseFloat(winner_colorplus)
    );
    const c_p = payload?.find((p) => p.runner_name === "colorplus");
    if (findAPlusPrice && c_p) {
      totalWin += findAPlusPrice?.amount * c_p?.stake;
    }
  }

  return totalWin;
};
