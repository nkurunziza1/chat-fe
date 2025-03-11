import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext';

const HomeBack:React.FC= () => {
	const { authUser } = useAuthContext();
  return (
    <div>
          <div  className=" bg-center bg-cover m-auto overflow-hidden bg-customSilver-dark lg:w-1/2  bg-transparent">
          <div className="flex w-full flex-col h-full items-center  justify-center">
          <span className="items-center justify-center w-full flex">
            <img
              src="./logo2.svg"
              className=" block w-[150px] h-[150px]  "
              alt=""
            />
          </span>
          <div className='w-full'>
            <h2 className="text-display3 font-mono text- text-black font-medium w-full flex-1 text-center">
             Welcome <h3 className='text-primary'>{authUser.username}</h3>
            </h2>
            <p className=" text-gray-700 mb-[20px] text-center text-bodyLarge">It’s quick and easy.</p>
          </div>
        <span className=" flex justify-items-start items-center gap-[20px] py-2">
       <img className=" w-[40px] h-[40px]  cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out " src="./google.svg" alt="" />
        <img className=" w-[40px] h-[40px]  cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out" src="./github.svg" alt="" />
        <img className=" w-[40px] h-[40px]  cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out" src="./twitter2.svg" alt="" />
       </span>
          </div>
        </div>
    </div>
  )
}

export default HomeBack