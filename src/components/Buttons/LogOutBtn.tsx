import React from 'react'
import useLogout from '../../hooks/Logout'

interface BtnProps {

}

const LogOutBtn:React.FC<BtnProps> = ({}) => {
    const {loarding,logout}:any = useLogout()
  return (
    <>
       <button className='w-[30px] cursor-pointer bg-svg' onClick={()=> logout()} >
         {!loarding ? (
                <span className="">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
      </span>
         ) : (
       <span className=' loading loading-spinner'></span>
         )

         }
       </button>
    </>
  )
}

export default LogOutBtn