import { useEffect } from "react";
import { useSocketContext } from "../contexts/SocketContext"
import useChatStore from "../zustand/useChatStore";
import notificationSound from '../assets/sounds/notification.mp3'
const useListenMessages = () => {
  const {socket}:any = useSocketContext();
  const {messages, setMessages}:any= useChatStore();
  
  useEffect(()=>{
    socket?.on('newMessage',(newMessage:any)=>{
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
			sound.play();
    setMessages([...messages, newMessage]);
    })
    return ()=> socket?.off("newMessage")
  },[socket, setMessages, messages])

}

export default useListenMessages