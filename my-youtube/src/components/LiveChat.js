import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessae from "./ChatMessae";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling - every 2 sec new message
      // console.log("API Polling - every 2 sec new message");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <ChatMessae key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Viswa V",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="mx-2 px-2 bg-green-400 text-white rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
