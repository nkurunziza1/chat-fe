import React, { useEffect, useRef } from "react";
import Message from "../Messages/Message";
import { MessageRightSkeleton } from "../skeletons/Skeleton";
import MessageSkeleton from "../skeletons/Skeleton";
import useListenMessages from "../../hooks/useListenMessages";
import UseGetMessages from "../../hooks/UseGetMessages";

const ChatBody: React.FC = () => {
  const { messages, loading }: any = UseGetMessages();
  useListenMessages(); // socket realtime message listen
  const lastMessageRef: any = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="h-full">
      <div className="h-[80vh] px-1 overflow-auto ">
        {!loading &&
          messages.length > 0 &&
          messages.map((message: any) => (
            <div ref={lastMessageRef} key={message._id}>
              <Message message={message} />
            </div>
          ))}
        {loading &&
          [...Array(3)].map((_, index) => (
            <div key={index}>
              <MessageSkeleton /> <MessageRightSkeleton />
            </div>
          ))}
        {!loading && messages.length === 0 && (
          <p className="mt-11 text-bodyLarge text-center text-gray-600">
            Send a message to start the conversation.
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatBody;
