import { useSelector } from "react-redux";
import { useEffect } from "react";
import Stake from "../../components/shared/Stake/Stake";
import { playStakeChangeSound } from "../../utils/sound";
import { Winner } from "../../const";

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
      eventId: 30003,
      eventName: "Fast Teen Patti T20",
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
            key: "playerA",
            runner_name: "playerA",
            price: 1.98,
          })
        }
        className={`relative flex  border w-full items-center rounded justify-center aspect-square 
                h-16 lg:h-20  
                bg-gradient-to-t from-green/50 to-green/70
               ${
                 winCard?.winner === Winner.B && isAnimationEnd
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
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("playerA")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.playerA?.stake : stake} />
          </div>

          {stakeState?.playerA?.show && (
            <Stake stake={stakeState?.playerA?.stake} />
          )}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "colorPlus",
            runner_name: "colorPlus",
            price: null,
          })
        }
        className={`relative flex  border w-full items-center rounded justify-center aspect-square 
                row-span-2 h-full 
                bg-gradient-to-t from-white/5 to-white/10
            border-white/10 text-white/50`}
        style={{ pointerEvents: "auto" }}
      >
        <span className="absolute font-medium  -translate-y-1/2 top-1/2  text-center lg:text-lg  ">
          Color Plus
        </span>
        <div className="absolute bottom-0  w-full rounded-b-sm overflow-clip flex flex-wrap justify-center flex-row-reverse  items-center gap-[1px] text-[9px] text-black">
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
          >
            x9
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
          >
            x3
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
          >
            x9
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
          >
            x12
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
          >
            x15
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
          >
            x150
          </span>
          <span
            className="flex-grow px-1 font-mono font-medium text-center "
            style={{ backgroundColor: "rgba(128, 128, 128, 0.5)" }}
          >
            x200
          </span>
        </div>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("colorPlus")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.colorPlus?.stake : stake} />
          </div>

          {stakeState?.colorPlus?.show && (
            <Stake stake={stakeState?.colorPlus?.stake} />
          )}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "playerB",
            runner_name: "playerB",
            price: 1.98,
          })
        }
        className="relative flex  border w-full items-center rounded justify-center aspect-square 
                h-16 lg:h-20  
                bg-gradient-to-t from-blue/50 to-blue/70
            border-white/10 text-white/50 "
        style={{ pointerEvents: "auto" }}
      >
        <span className="absolute font-medium  -translate-y-1/2 top-1/2  text-center lg:text-lg  ">
          Player B
        </span>
        <span className="absolute text-white font-mono bottom-0 right-1 text-[9px]">
          x1.98
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("playerB")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.playerB?.stake : stake} />
          </div>

          {stakeState?.playerB?.show && (
            <Stake stake={stakeState?.playerB?.stake} />
          )}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "baccaratA",
            runner_name: "baccaratA",
            price: 2.05,
          })
        }
        className="relative flex  border w-full items-center rounded justify-center aspect-square 
                h-16 lg:h-20  
                bg-gradient-to-t from-white/5 to-white/10
            border-white/10 text-white/50 "
        style={{ pointerEvents: "auto" }}
      >
        <span className="absolute font-medium  -translate-y-1/2 top-1/2  text-center lg:text-lg  ">
          Baccarat A
        </span>
        <span className="absolute text-white font-mono bottom-0 right-1 text-[9px]">
          x2.05
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("baccaratA")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.baccaratA?.stake : stake} />
          </div>

          {stakeState?.baccaratA?.show && (
            <Stake stake={stakeState?.baccaratA?.stake} />
          )}
        </div>
      </div>
      <div
        onClick={() =>
          handleStakeChange({
            key: "baccaratB",
            runner_name: "baccaratB",
            price: 2.05,
          })
        }
        className="relative flex  border w-full items-center rounded justify-center aspect-square 
                h-16 lg:h-20  
                bg-gradient-to-t from-white/5 to-white/10
            border-white/10 text-white/50 "
        style={{ pointerEvents: "auto" }}
      >
        <span className="absolute font-medium  -translate-y-1/2 top-1/2  text-center lg:text-lg  ">
          Baccarat B
        </span>
        <span className="absolute text-white font-mono bottom-0 right-1 text-[9px]">
          x2.05
        </span>
        <div className="relative w-10 h-10">
          <div
            className={`${
              animation.includes("baccaratB")
                ? "absolute top-0 visible transition-all duration-500 "
                : "absolute -top-16 invisible opacity-0"
            }  z-50`}
          >
            <Stake stake={double ? stakeState?.baccaratB?.stake : stake} />
          </div>

          {stakeState?.baccaratB?.show && (
            <Stake stake={stakeState?.baccaratB?.stake} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
