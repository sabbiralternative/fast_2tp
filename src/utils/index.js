import { Winner } from "../const";

const ABPLUS = [
  { key: "WINNER", amount: 1.98 },
  { key: "COLOR", amount: 5 },
  { key: "TRIO", amount: 26 },
  { key: "PAIR", amount: 2 },
  { key: "STRAIGHT", amount: 7 },
  { key: "STRAIGHTFLUSH", amount: 36 },
];

export const calculateTotalWin = (
  winner,
  winner_aplus,
  winner_bplus,
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
  if (winner_aplus) {
    const findAPlusPrice = ABPLUS?.find((a) => a.key === winner_aplus);
    const aPlus = payload?.find((p) => p.runner_name === "APLUS");
    if (findAPlusPrice && aPlus) {
      totalWin += findAPlusPrice?.amount * aPlus?.stake;
    }
  }
  if (winner_bplus) {
    const findBPlusPrice = ABPLUS?.find((a) => a.key === winner_bplus);
    const bPlus = payload?.find((p) => p.runner_name === "BPLUS");
    if (findBPlusPrice && bPlus) {
      totalWin += findBPlusPrice?.amount * bPlus?.stake;
    }
  }

  return totalWin;
};
