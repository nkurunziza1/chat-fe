import React from "react";
import Avatar from "../avatar/Avatar";
import { InfoSVG, NotifySvg, VideoSvg } from "../../assets/data";
import useChatStore from "../../zustand/useChatStore";
import { useSocketContext } from "../../contexts/SocketContext";
import { useAuthContext } from "../../contexts/AuthContext";

const ChatHeader: React.FC = () => {
  const {selectedChat}:any = useChatStore();
  const {onlineUsers}:any= useSocketContext();
  const isOnline = onlineUsers.includes(selectedChat._id)
  const {authUser} = useAuthContext();
  const userLogin = selectedChat._id === authUser.id
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 justify-center items-center">
        <Avatar isOnline={isOnline} image={selectedChat.profilePic}/>
        <div className="flex items-start justify-center flex-col">
          <h4 className="text-bodyDefault text-black font-semibold">
            {selectedChat.username}{userLogin? '(You)':null}
          </h4>
          <p className="text-bodySmall text-primary">{isOnline ? 'Online':'Offline'}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <span className="flex items-center justify-center ">
            <VideoSvg />
        </span>
        <span>
            <InfoSVG />
        </span>
        <span className="flex">
           
       {/* <div>
       <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75">
  </span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"> 
  </span>
</span>
       </div> */}
<NotifySvg />
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
