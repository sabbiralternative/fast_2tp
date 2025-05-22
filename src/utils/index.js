import { Winner } from "../const";

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

  if (winner === Winner.A) {
    const a = payload?.find((p) => p.runner_name === "A");
    if (a) {
      totalWin += a?.price * a?.stake;
    }
  }
  if (winner === Winner.B) {
    const b = payload?.find((p) => p.runner_name === "B");
    if (b) {
      totalWin += b?.price * b?.stake;
    }
  }
  if (winner_baccarat) {
    const w_b = payload?.find((p) => p.runner_name === winner_baccarat);
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
