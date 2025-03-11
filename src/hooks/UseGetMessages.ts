import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import useChatStore from "../zustand/useChatStore";

const UseGetMessages = ():object => {
    const [loading, setLoading] = useState<boolean>();
    const {messages, setMessages, selectedChat }:any = useChatStore();
    useEffect(() => {
     const getMessage = async()=>{
      try {
        await axios.get(`/api/message/get/${selectedChat._id}`)
        .then((response)=>{
           const data = response.data
            console.log(response);
            setMessages(data);  
        }).catch((error)=>{
          console.error(error.message);
          toast.error(error.response.data.message);
        })
      } catch (error:any) {
        toast.error(error.message);
        
      }finally{
        setLoading(false)
      }
    }
    if(selectedChat?._id) getMessage();

    }, [selectedChat?._id, setMessages])
    
  return {loading, messages}
}
export default UseGetMessages
