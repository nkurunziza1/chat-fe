// SocketContext.tsx
import React, { createContext,useEffect, useState, ReactNode, useContext } from 'react';
import io, { Socket } from 'socket.io-client';
import { useAuthContext } from './AuthContext';
import {SocketContextType } from './types';

export const SocketContext = createContext<SocketContextType | undefined>(undefined);

interface SocketContextProviderProps {
  children: ReactNode;
}

export const useSocketContext = ()=>{
  return useContext(SocketContext)
}

export const SocketContextProvider: React.FC<SocketContextProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
  const { authUser }:any = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const newSocket = io("https://mailer-chat.onrender.com", {
        query: {
          userId: authUser.id,
        },
      });

      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users: any) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
