import React, { ChangeEvent, useState } from 'react'
import ChatListItem from './ChatListItem'
import useGetChat from '../../hooks/useGetChat';
import toast from 'react-hot-toast';
import useChatStore from '../../zustand/useChatStore';

const ChatsList:React.FC = () => {
  const {loading, chats}:any = useGetChat()
  const [query, setQuery] = useState<string>('');
	const { setSelectedChat } = useChatStore();


	const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!query) return;
		if (query.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}
  
		const chat = chats.find((c:any) => c.fullName.toLowerCase().includes(query.toLowerCase()));

		if (chat) {
			setSelectedChat(chat);
			setQuery("");
		} else {
      toast.error("No such user found!");

    }
  }
  return (
    <div className=' bg-white divide-y-[1px]' >
      {/* top side */}
      <div className='p-[20px]'>
        <h2 className='py-[10px] px-4 text-start text-headingH4 md:text-headingH3 font-extrabold'>Message</h2>
        <form action="" className='
        flex items-center justify-center w-full rounded-full outline-none px-4 
           text-gray-900 border
             focus:ring-1
             focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6' onSubmit={handleSubmit}>
        <input
          id="search"
          name="searcch"
          value={query}
          type="text"
          placeholder="Search..."
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setQuery(e.target.value)}
          className="block   outline-none px-4 
           text-gray-900 border-none w-full placeholder:px-2 
            placeholder:text-gray-400 focus:ring-1
             focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-6"
        />
        <button type='submit'className='h-full' >
          🔍
        </button>
        </form>
         <div className='flex justify-start px-2 pt-3 items-start gap-[10px]'>
          <p 
          className='text-bodySmall'>Sort by</p> 
          <span
           className='text-Blue-400 text-bodySmall 
          flex items-center justify-center  underline cursor-pointer '>Newest <span className='w-[20px] '><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2D9CDB"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path> </g> </g></svg></span></span>
         </div>
      </div>
      {/* bottom side  */}
      <div className=' overflow-auto h-[70vh] divide-y-[1px]'>
       {
        chats.map((chat:any)=>(
          <ChatListItem chat={chat} loading={loading} />  
        ))
       } 
      </div>
    </div>
  )
}

export default ChatsList