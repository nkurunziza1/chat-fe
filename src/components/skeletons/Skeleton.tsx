import React from 'react';
// import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MessageSkeleton: React.FC = () => {
  return (
    <div>
      <div className="chat chat-start animate-pulse">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-300 "></div>
        </div>
        <div className="chat-header text-black flex items-center justify-center gap-2">
          <div className="h-4 w-24 bg-gray-300 mb-3"></div>
        </div>
        <div className="bg-customSilver-dark w-[200px] chat-bubble text-black text-bodySmall md:text-bodyDefault">
          <div className="h-4 bg-gray-300 mb-2"></div>
          <div className="h-4 bg-gray-300 mb-2"></div>
          <div className="chat-footer opacity-80 text-bodySmall text-primary text-right flex justify-end items-end flex-col">
            <div className="h-2 w-12 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSkeleton;

export const MessageRightSkeleton: React.FC = () => {
  return (
    <div>
      <div className="chat chat-end animate-pulse">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-gray-300"></div>
        </div>
        <div className="chat-header text-black flex items-center justify-center gap-2">
          <div className="h-4 w-24 bg-gray-300 mb-3"></div>
        </div>
        <div className="chat-bubble w-[200px] bg-gray-200 text-black text-bodySmall md:text-bodyDefault">
          <div className="h-4 bg-gray-300 mb-2"></div>
          <div className="h-4 bg-gray-300 mb-2"></div>
          <div className="chat-footer text-bodySmall text-primary text-right flex justify-end items-end flex-col">
            <div className="h-2 w-12 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
