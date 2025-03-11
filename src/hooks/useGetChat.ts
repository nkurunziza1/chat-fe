import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetChat = (): object => {
  const [chats, setChats] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getChat = async () => {
      setLoading(true);
      try {
        await axios
          .get("/api/user")
          .then((response) => {
            // console.log(response.data);
            const data = response.data.allUsers;
            setChats(data);
          })
          .catch((error) => {
            console.log(error.response.data);
            toast.error(error.response.data.messages);
          });
      } catch (error: any) {
        console.error(error.message);
        toast.error(error.message);

      } finally {
        setLoading(false);
      }
    };
    getChat();
  }, []);

  return { loading, chats };
};

export default useGetChat;
