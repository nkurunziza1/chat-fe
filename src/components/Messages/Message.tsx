import React from 'react'
import Twotick from '../../assets/data';
import { useAuthContext } from '../../contexts/AuthContext';
import useChatStore from '../../zustand/useChatStore';
import { getTime } from '../../assets/getCurrentTime';
interface Message {
  message:any
}

export const Message: React.FC<Message> = ({message}) => {
  const {authUser}:any = useAuthContext();
  const {selectedChat}:any = useChatStore();
  const fromMe =  message.senderId === authUser.id
  const chatClassName = !fromMe ? 'chat-end': 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedChat.profilePic;
  const bgColor = fromMe ? 'bg-gray-200 ': 'bg-gray-300';
  const userLogin = selectedChat._id === authUser.id
  const shakeClass = message.shouldShake ? "shake" : ""
   



  return (
    <div>
    <div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="avatar"
         src={profilePic} 
         />
    </div>
  </div>
  <div className="chat-header  text-black flex items-center justify-center gap-2">
    <h4 className='font-mono text-bodyDefault uppercase'> {fromMe ? 'You': userLogin ?`${selectedChat.username}(You)` : selectedChat.username }</h4>
   
  </div>
  <div className={`${bgColor}  ${shakeClass}
  chat-bubble text-black text-bodySmall 
  md:text-bodyDefault`}>
      {message.content}
    <div className="chat-footer opacity-80 text-bodySmall text-primary text-right flex justify-end items-end flex-col">
    <time className="text-[10px] text-black flex items-center justify-center gap-1">{getTime(message.sentAt)} <span className='w-[15px]'><Twotick /></span></time>
    </div>
    </div>
 
</div>
    </div>
  )
}

export default Message






// export const MessageRight: React.FC = ({}:any) => {
//   // const {authUser} = useAuthContext();
//   // const {selectedChat}:any = useChatStore();
//   // const fromMe =  message.senderId === authUser._id
//   // const chatClassName = fromMe ? 'chat-end': 'chat-start'
//   // const profilePic = fromMe ? authUser.profilePic : selectedChat.profilePic;
//   // const bgColor = fromMe ? 'bg-gray-200 ': ''
//   return ( 
//     <div>
//  <div className="chat chat-end">
//   <div className="chat-image avatar">
//     <div className="w-10 rounded-full">
//       <img
//         alt="Tailwind CSS chat bubble component"
//         src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//     </div>
//   </div>
//   <div className="chat-header text-black flex items-center justify-center gap-2 "> 
//     <h4 className='font-mono text-bodyDefault uppercase'> Anakin</h4>
//   </div>

//   <div className="chat-bubble bg-gray-200 text-black text-bodySmall md:text-bodyDefaul">
//     I hate you!
//   <div className="chat-footer text-bodySmall text-primary text-right flex justify-end items-end flex-col">
//   <time className="text-[10px] text-black flex items-center justify-center gap-1">12:45 <span className='w-[15px]'><Twotick /></span></time>
//    </div>
// </div>

// </div>
// </div>
//   );
// };







