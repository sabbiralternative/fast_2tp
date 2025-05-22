import { useSelector } from "react-redux";
import { useEffect } from "react";
import { playStakeChangeSound } from "../../utils/sound";
import { Winner } from "../../const";
import StakeAnimation from "./StakeAnimation";

const BetSlip = ({
  setShowTotalWinAmount,
  setAnimation,
  setStakeState,
  stakeState,
  animation,
  double,
  winCard,
  setIsAnimationEnd,
  isAnimationEnd,
}) => {
  const { stake } = useSelector((state) => state.global);

  const handleStakeChange = (payload) => {
    setShowTotalWinAmount(false);
    setIsAnimationEnd(false);
    playStakeChangeSound();
    const { key } = payload;
    setAnimation([key]);
    const formatData = {
      eventId: 30004,
      eventName: "Fast TP 2 Card",
      isback: 0,
      runner_name: payload.runner_name,
      price: payload.price,
      stake: payload.stake,
    };
    const timeout = setTimeout(() => {
      setAnimation([]);
      setStakeState((prev) => {
        const maxSerial = Math.max(
          0,
          ...Object.values(prev)
            .map((item) => item.serial)
            .filter((serial) => serial !== undefined)
        );

        return {
          ...prev,
          [key]: {
            eventId: formatData.eventId,
            eventName: formatData.eventName,
            isback: formatData.isback,
            runner_name: formatData.runner_name,
            price: formatData.price,
            show: true,
            animation: false,
            stake: prev[key].show
              ? prev[key].stake + prev[key].actionBy
              : prev[key].stake,
            serial: prev[key]?.serial ? prev[key]?.serial : maxSerial + 1,
            actionBy: stake,
            undo: [...(prev[key]?.undo || []), stake],
          },
        };
      });
    }, 500);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    setStakeState((prev) => {
      const updatedState = {};
      for (const key in prev) {
        updatedState[key] = {
          ...prev[key],
          stake: prev[key].show ? prev[key].stake : stake,
          actionBy: stake,
        };
      }
      return updatedState;
    });
  }, [stake]); // Runs when stake value changes

  return (
    <div
      id="step-betOptions"
      className="grid grid-cols-3 gap-0.5 justify-items-center justify-center  px-6 mx-auto max-w-md w-full p-2 lg:pb-12 "
      style={{ pointerEvents: "auto" }}
    >
      <div
        onClick={() =>
          handleStakeChange({
            key: "A",
            runner_name: "A",
            price: 1.98,
          })
        }
        className={`relative flex  border w-full items-center rounded justify-center aspect-square 
                h-16 lg:h-20  
                bg-gradient-to-t from-green/50 to-green/70
               ${
                 winCard?.winner === Winner.A && isAnimationEnd
                   ? "border-stakeGreen text-stakeGreen"
                   : "border-white/30 text-white/50"
               }`}
        style={{ pointerEvents: "auto" }}
      >
        <span className="absolute font-medium  -translate-y-1/2 top-1/2  text-center lg:text-lg  ">
          Player A
        </span>
        <span className="absolute text-white font-mono bottom-0 right-1 text-[9px]">
          x1.98
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"A"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "colorplus",
            runner_name: "colorplus",
            price: null,
          })
        }
        className={`relative flex  border w-full items-center rounded justify-center aspect-square 
                row-span-2 h-full 
                bg-gradient-to-t from-white/5 to-white/10
             ${
               winCard?.winner_colorplus && isAnimationEnd
                 ? "border-stakeGreen text-stakeGreen"
                 : "border-white/30 text-white/50"
             }`}
        style={{ pointerEvents: "auto" }}
      >
        <span className="absolute font-medium  -translate-y-1/2 top-1/2  text-center lg:text-lg  ">
          Color Plus
        </span>
        <div className="absolute bottom-0  w-full rounded-b-sm overflow-clip flex flex-wrap justify-center flex-row-reverse  items-center gap-[1px] text-[9px] text-black">
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{
              backgroundColor:
                winCard?.winner_colorplus === 9 && isAnimationEnd
                  ? "rgb(0, 184, 231)"
                  : "rgba(128, 128, 128, 0.5)",
            }}
          >
            x9
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{
              backgroundColor:
                winCard?.winner_colorplus === 3 && isAnimationEnd
                  ? "rgb(0, 184, 231)"
                  : "rgba(128, 128, 128, 0.5)",
            }}
          >
            x3
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{
              backgroundColor:
                winCard?.winner_colorplus === 9 && isAnimationEnd
                  ? "rgb(0, 184, 231)"
                  : "rgba(128, 128, 128, 0.5)",
            }}
          >
            x9
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{
              backgroundColor:
                winCard?.winner_colorplus === 12 && isAnimationEnd
                  ? "rgb(0, 184, 231)"
                  : "rgba(128, 128, 128, 0.5)",
            }}
          >
            x12
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{
              backgroundColor:
                winCard?.winner_colorplus === 15 && isAnimationEnd
                  ? "rgb(0, 184, 231)"
                  : "rgba(128, 128, 128, 0.5)",
            }}
          >
            x15
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{
              backgroundColor:
                winCard?.winner_colorplus === 50 && isAnimationEnd
                  ? "rgb(0, 184, 231)"
                  : "rgba(128, 128, 128, 0.5)",
            }}
          >
            x150
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{
              backgroundColor:
                winCard?.winner_colorplus === 200 && isAnimationEnd
                  ? "rgb(0, 184, 231)"
                  : "rgba(128, 128, 128, 0.5)",
            }}
          >
            x200
          </span>
        </div>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"colorplus"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "B",
            runner_name: "B",
            price: 1.98,
          })
        }
        className={`relative flex  border w-full items-center rounded justify-center aspect-square 
                h-16 lg:h-20  
                bg-gradient-to-t from-blue/50 to-blue/70
              ${
                winCard?.winner === Winner.B && isAnimationEnd
                  ? "border-stakeGreen text-stakeGreen"
                  : "border-white/30 text-white/50"
              }`}
        style={{ pointerEvents: "auto" }}
      >
        <span className="absolute font-medium  -translate-y-1/2 top-1/2  text-center lg:text-lg  ">
          Player B
        </span>
        <span className="absolute text-white font-mono bottom-0 right-1 text-[9px]">
          x1.98
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"B"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "baccaratA",
            runner_name: "baccaratA",
            price: 2.05,
          })
        }
        className={`relative flex  border w-full items-center rounded justify-center aspect-square 
                h-16 lg:h-20  
                bg-gradient-to-t from-white/5 to-white/10
             ${
               winCard?.winner_baccarat === Winner.A && isAnimationEnd
                 ? "border-stakeGreen text-stakeGreen"
                 : "border-white/30 text-white/50"
             }`}
        style={{ pointerEvents: "auto" }}
      >
        <span className="absolute font-medium  -translate-y-1/2 top-1/2  text-center lg:text-lg  ">
          Baccarat A
        </span>
        <span className="absolute text-white font-mono bottom-0 right-1 text-[9px]">
          x2.05
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"baccaratA"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "baccaratB",
            runner_name: "baccaratB",
            price: 2.05,
          })
        }
        className={`relative flex  border w-full items-center rounded justify-center aspect-square 
                h-16 lg:h-20  
                bg-gradient-to-t from-white/5 to-white/10
            ${
              winCard?.winner_baccarat === Winner.B && isAnimationEnd
                ? "border-stakeGreen text-stakeGreen"
                : "border-white/30 text-white/50"
            }`}
        style={{ pointerEvents: "auto" }}
      >
        <span className="absolute font-medium  -translate-y-1/2 top-1/2  text-center lg:text-lg  ">
          Baccarat B
        </span>
        <span className="absolute text-white font-mono bottom-0 right-1 text-[9px]">
          x2.05
        </span>
        <StakeAnimation
          animation={animation}
          double={double}
          runner={"baccaratB"}
          stake={stake}
          stakeState={stakeState}
        />
      </div>
    </div>
  );
};

export default BetSlip;
