import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";

interface User {
  email: string;
  password: string;

}

const useLogin = (): object => {
  const [loading, setLoading] = useState<boolean>(false);
  const {setAuthUser } = useAuthContext();

  const login:any = ({
    email,
    password,
  }: User) => {
    const success = handleErrors({
      email,
      password,
    });

    if (!success) return;

    setLoading(true);

    try {
      axios
        .post("/api/auth/login", {
          email,
          password,
        })
        .then((response) => {
          const data = response.data;
          console.log({ data });
          localStorage.setItem('data',JSON.stringify(data));
          setAuthUser(data);
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

  return { loading, login };
};

export default useLogin;

const handleErrors = ({
  email,
  password,

}: User) => {
  if (!password ||!email) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
};
