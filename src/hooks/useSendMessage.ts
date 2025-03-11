import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useChatStore from "../zustand/useChatStore";

const useSendMessage = (): object => {
  const [loading, setLoading] = useState<boolean>();
  const { messages, setMessages, selectedChat }: any = useChatStore();

  const sendMessage = async (content: string) => {
    try {
    //   const success = handleErrors(content);
    //   if (!success) return;

      await axios.post(`/api/message/send/${selectedChat._id}`, {
          content,
        })
        .then((response) => {
          const data = response.data;
        //   console.log(response);
          setMessages([...messages, data]);
        })
        .catch((error) => {
          console.error(error.message);
          toast.error(error.response.data.message);
        });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};
export default useSendMessage;

// const handleErrors = (message: string) => {
//   if (!message) {
//     toast.error("Please fill in  field");
//     return false;
//   }
//   return false;
// };
