import React from 'react'
type props ={
  image:string
  isOnline:boolean
}

const Avatar:React.FC<props> = ({image, isOnline}) => {
  // console.log(image)
  return (
     <>
        {/* avater */}
        <div className={`avatar ${isOnline ? 'online':''}`}>
             <div className="w-[35px] rounded-full">
               <img src={image} />
             </div>
           </div>
     </>
  )
}

export default Avatar