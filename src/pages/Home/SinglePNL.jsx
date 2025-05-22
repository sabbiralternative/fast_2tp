import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";
import { handleCopyToClipBoard } from "../../utils/handleCopyToClipBoard";
import SingleCard from "./SingleCard";

const SinglePNL = ({ setSinglePNL, singlePNL }) => {
  const ref = useRef();
  const closeModal = () => {
    setSinglePNL(null);
  };

  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  const cardsToRender = [
    {
      player: "A",
      id: "playerOneFirstCard",
      style: {
        position: "absolute",
        right: "75%",
        top: "40%",
        transform: "translateZ(51px) rotateY(-180deg)",
        transformStyle: "preserve-3d",
      },
      card: singlePNL?.card_a?.[0],
      highlight: singlePNL.winner,
    },
    {
      player: "B",
      id: "playerTwoFirstCard",
      style: {
        position: "absolute",
        right: "30%",
        top: "40%",
        transform: "translateZ(52px) rotateY(-180deg)",
        transformStyle: "preserve-3d",
      },
      card: singlePNL?.card_b?.[0],
      highlight: singlePNL.winner,
    },
    {
      player: "A",
      id: "playerOneSecondCard",
      style: {
        position: "absolute",
        right: "65%",
        top: "45%",
        transform: "translateZ(53px) rotateY(-180deg)",
        transformStyle: "preserve-3d",
      },
      card: singlePNL?.card_a?.[1],
      highlight: singlePNL.winner,
    },
    {
      player: "B",
      id: "playerTwoSecondCard",
      style: {
        position: "absolute",
        right: "20%",
        top: "45%",
        transform: "translateZ(54px) rotateY(-180deg)",
        transformStyle: "preserve-3d",
      },
      card: singlePNL?.card_b?.[1],
      highlight: singlePNL.winner,
    },
  ];

  return (
    <div
      className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full p-3 bg-black/80"
      style={{ zIndex: 1000 }}
    >
      <div
        onClick={closeModal}
        className="flex justify-end w-full max-w-lg text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        ref={ref}
        className="w-full max-w-lg animate__animated animate__slideInUp animate__faster"
      >
        <div className="w-full p-4 border rounded-lg bg-zinc-900 border-zinc-800">
          <div className="flex items-center justify-between ">
            <h2 className="text-base font-medium text-white ">Round History</h2>
            <span className="text-xs text-zinc-500">
              {singlePNL?.round_time}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1 mt-2">
            <div className="flex items-center justify-between px-2 py-1 rounded bg-zinc-800 ">
              <span className="flex flex-col justify-between text-zinc-300">
                <span className="text-[10px] text-zinc-500">Round Id</span>
                {singlePNL?.round_id}
              </span>
              <span
                onClick={() => handleCopyToClipBoard(singlePNL?.round_id)}
                className="rounded-full cursor-pointer text-zinc-500 active:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                  <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                </svg>
              </span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded bg-zinc-800 ">
              <span className="flex flex-col justify-between text-zinc-300">
                <span className="text-[10px] text-zinc-500">Game Id</span>
                {singlePNL?.event_id}
              </span>
              <span
                onClick={() => handleCopyToClipBoard(singlePNL?.event_id)}
                className="rounded-full cursor-pointer text-zinc-500 active:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                  <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                </svg>
              </span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded bg-zinc-800 ">
              <span className="flex flex-col justify-between text-zinc-300">
                <span className="text-[10px] text-zinc-500">server seed</span>
                {singlePNL?.server_seed}
              </span>
              <span
                onClick={() => handleCopyToClipBoard(singlePNL?.server_seed)}
                className="rounded-full cursor-pointer text-zinc-500 active:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                  <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                </svg>
              </span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded bg-zinc-800 ">
              <span className="flex flex-col justify-between text-zinc-300">
                <span className="text-[10px] text-zinc-500">client seed</span>
                {singlePNL?.client_seed}
              </span>
              <span
                onClick={() => handleCopyToClipBoard(singlePNL?.client_seed)}
                className="rounded-full cursor-pointer text-zinc-500 active:text-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-4 h-4"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                  <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="relative w-full -mt-20 pointer-events-none aspect-square">
            {cardsToRender.map((card) => (
              <SingleCard
                key={card.id}
                style={card.style}
                card={card.card}
                highlight={true}
                player={card.player}
                winCard={{ winner: singlePNL?.winner }}
              />
            ))}

            <span className="z-50 whitespace-nowrap absolute left-[5%] flex justify-center gap-1 items-center px-2 py-1 text-xs font-medium text-white rounded bottom-2 bg-zinc-800">
              Player A
              {singlePNL?.winner === "A" && (
                <span className="absolute right-0 flex flex-col items-center translate-x-full text-gold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </span>

            <span
              className="absolute z-50 flex items-center justify-center gap-1 px-2 py-1 text-xs font-medium text-black rounded whitespace-nowrap "
              style={{
                transform: "translateY(-105%) translateZ(52px) translateX(50%)",
                right: singlePNL?.winner === "A" ? "75%" : "25%",
                top: "40%",
                backgroundColor: "rgb(0, 231, 0)",
              }}
            >
              {singlePNL?.winner_method}
            </span>
            <span className="z-50 whitespace-nowrap absolute right-[5%] flex justify-center gap-1 items-center px-2 py-1 text-xs font-medium text-white rounded bottom-2 bg-zinc-800">
              Player B
              {singlePNL?.winner === "B" && (
                <span className="absolute right-0 flex flex-col items-center translate-x-full text-gold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePNL;
