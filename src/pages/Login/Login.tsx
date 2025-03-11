import React, { ChangeEvent, useState } from "react";
import Input from "../../components/Inputs/Input";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/Login";

const Login: React.FC = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loarding, login }: any = useLogin();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    //  console.log(inputs);
    await login(inputs);
  };

  return (
    <div>
      <div className="w-full h-full bg-white block lg:flex justify-between ">
        <div className="lg:w-1/2  py-[150px] bg-white ">
          <span className="items-center justify-center flex">
            <img
              src="./logo2.svg"
              className=" block w-[60px] h-[60px]  "
              alt=""
            />
          </span>

          <form
            className="  rounded-lg border mx-2 h-full py-2 px-[60px] lg:px-[120px]"
            onSubmit={handleSubmit}
          >
            <div className=" pb-[20px]">
              <h2 className="text-display4 lg:text-display3 text-black font-medium text-center">
                Log Into Mailer
              </h2>
              <p className="text-center text-bodySmall">It’s quick and easy.</p>
            </div>
            <Input
              label="Email or User Name"
              type="text"
              placeholder="example@gmail.com"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputs({ ...inputs, email: e.target.value })
              }
              value={inputs.email}
            />
            <Input
              label="Password"
              type="password"
              placeholder="******"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              value={inputs.password}
            />
            <button
              type="submit"
              disabled={loarding}
              className=" bg-black mt-[20px] cursor-pointer border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
            >
              {!loarding ? (
                "Login"
              ) : (
                <span className=" loading loading-ring"></span>
              )}
            </button>
            <p className=" text-center py-3 text-primary underline ">
              <Link to={"/signup"}>Sign up for Mailer</Link>
            </p>
          </form>
        </div>
        <div
          style={{ height: "150vh", backgroundImage: "url('/login.png')" }}
          className=" bg-center bg-cover m-auto overflow-hidden bg-white lg:w-1/2 h-[120vh] bg-transparent"
        >
          <div className="flex w-full flex-col h-full items-center justify-center">
            <span className="items-center justify-center flex">
              <img
                src="./logo2.svg"
                className=" block w-[150px] h-[150px]  "
                alt=""
              />
            </span>
            <div>
              <h2 className="text-display2 text-white font-medium text-center">
                Create a new account
              </h2>
              <p className=" text-white mb-[20px] text-center text-bodyLarge">
                It’s quick and easy.
              </p>
            </div>
            <span className=" flex justify-items-start items-center gap-[20px] py-2">
              <img
                className=" w-[40px] h-[40px]  cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out "
                src="./google.svg"
                alt=""
              />
              <img
                className=" w-[40px] h-[40px]  cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out"
                src="./github.svg"
                alt=""
              />
              <img
                className=" w-[40px] h-[40px]  cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out"
                src="./twitter2.svg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
