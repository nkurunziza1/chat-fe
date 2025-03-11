// types.ts
import { Socket } from 'socket.io-client';


export interface SocketContextType {
  socket: Socket | null;
  onlineUsers: any[]; // Replace `any` with a more specific type if you have one
}
