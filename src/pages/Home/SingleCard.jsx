import Club from "./Card/Club";
import Diamond from "./Card/Diamond";
import Heart from "./Card/Heart";
import Spade from "./Card/Spade";

const SingleCard = ({ style, card, highlight, player, winCard }) => {
  const borderClass =
    highlight && player == winCard?.winner ? "border-stakeGreen" : "";

  const getRank = (card) => {
    const removeFirstCharacter = card?.slice(1);
    if (removeFirstCharacter == "12") {
      return "Q";
    }
    if (removeFirstCharacter == "13") {
      return "K";
    }
    if (removeFirstCharacter == "11") {
      return "J";
    }
    return removeFirstCharacter;
  };

  return (
    <div
      className={`relative border-2 shadow-sm transition-all ease-in-out duration-200 h-24 lg:h-40 aspect-[5/7] rounded bg-white ${borderClass}`}
      style={style}
    >
      {card?.includes("H") && <Heart rank={getRank(card)} />}
      {card?.includes("C") && <Club rank={getRank(card)} />}
      {card?.includes("S") && <Spade rank={getRank(card)} />}
      {card?.includes("D") && <Diamond rank={getRank(card)} />}
    </div>
  );
};

export default SingleCard;
