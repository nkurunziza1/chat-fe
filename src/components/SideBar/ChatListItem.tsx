import React from 'react'
import Avatar from '../avatar/Avatar'
import Twotick from '../../assets/data'
import { getRandomEmoji } from '../../assets/useGetEmoji';
import getCurrentTime from '../../assets/getCurrentTime';
import useChatStore from '../../zustand/useChatStore';
import { useSocketContext } from '../../contexts/SocketContext';
import { useAuthContext } from '../../contexts/AuthContext';

type props = {
  chat:any,
  loading:boolean
}
const ChatListItem:React.FC<props> = ({chat, loading}) => {
 
   const {authUser} = useAuthContext();
   const userLogin = chat._id === authUser.id
   const {setSelectedChat}:any = useChatStore()
   const  {onlineUsers}:any = useSocketContext();
   const isOnline = onlineUsers.includes(chat._id)

  
  return (
   <>
     {
        <div key={chat._id}  onClick={()=>setSelectedChat(chat)} className='h-[55px] hover:bg-customSilver cursor-pointer flex justify-between items-center px-3'>
       <div className='flex justify-center items-center px-2  gap-2'>
               <Avatar image={chat.profilePic} isOnline={isOnline} />       
              <div className='flex items-start justify-center flex-col'>
                 <h4 className='text-bodyDefault text-black font-medium'>{chat.fullName}{userLogin ? '(You)': null}</h4>
                 <p className='text-bodySmall'>{getRandomEmoji()}</p>
              </div>
              </div>
   
   
              <div className='flex flex-col'>
                <span className='text-bodySmall'>{getCurrentTime()}</span>
                <span className='text-bodySmall w-[18px]'>
                   <Twotick />
                   {/* <Onetick /> */}
                </span>
              </div>
       </div>
  
     }
       {
        loading ? <span className=' loading loading-ring mx-auto'></span> : null
       }
   </>
  )
}

export default ChatListItem
