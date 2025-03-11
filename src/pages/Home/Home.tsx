import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import ChatBoard from '../../components/Chat/ChatBoard';
import { useAuthContext } from '../../contexts/AuthContext';

const Home: React.FC = () => {
 const {authUser}:any = useAuthContext()
 
  return (
    <div>
      <div className='w-full h-full block md:flex items-center justify-center gap-[10px]'>
        <div className='md:w-1/3 w-full h-[100vh]'>
          <SideBar data={authUser} />
        </div>
        <div className='md:block md:w-2/3 w-full bg-customSilver-dark h-[100vh]'>
          <div className=''>
           <ChatBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
