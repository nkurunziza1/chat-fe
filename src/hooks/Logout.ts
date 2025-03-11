import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";



const useLogout = (): object => {
  const [loading, setLoading] = useState<boolean>(false);
  const {setAuthUser } = useAuthContext();

  const logout:any = () => {

    setLoading(true);

    try {
      axios
        .post("/api/auth/logout")
        .then((response) => {
          const data = response.data;
          console.log({ data });
          localStorage.removeItem('data');
          setAuthUser(null);
        })
        .catch((error:any) => {
          toast.error(error.response.data.message);
          console.error(error.response.data.message); 
        //   throw new Error(error.response.data);
        })
        
    } catch (error:any) {
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
