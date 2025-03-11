import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";
interface User {
  fullName: string;
  username: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

const useSignUp = (): object => {
  const [loading, setLoading] = useState<boolean>(false);
  const {setAuthUser } = useAuthContext();
 

  const signup:any = ({
    fullName,
    username,
    email,
    gender,
    password,
    confirmPassword,
  }: User) => {

    const success = handleErrors({
      fullName,
      username,
      email,
      gender,
      password,
      confirmPassword,
    });

    if (!success) return;

    setLoading(true);

    try {
      axios
        .post("/api/auth/signup", {
          fullName,
          username,
          email,
          gender,
          password,
          confirmPassword,
        })
        .then((response) => {
          const data = response.data;
          // console.log({ data });
          localStorage.setItem('data',JSON.stringify(data));
          setAuthUser(data);
        })
        .catch((error:any) => {
          toast.error(error.response.data.message);
          console.error(error.response.data.message); 
          // throw new Error(error.message);
        });
        
    } catch (error:any) {
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

const handleErrors = ({
  fullName,
  username,
  email,
  gender,
  password,
  confirmPassword,
}: User) => {
  if (!fullName|| !username || !password || !confirmPassword || !gender ||!email) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};
