import create from 'zustand';

interface State {
  selectedChat: any[]; // Define the type more specifically if possible
  setSelectedChat: (chat: any[]) => void; // Define the type more specifically if possible
  messages: any[]; // Define the type more specifically if possible
  setMessages: (messages:any[]) => void; // Define the type more specifically if possible
}

const useChatStore = create<State>((set) => ({
  selectedChat:[],
  setSelectedChat: (selectedChat) => set(() => ({selectedChat })),
  messages: [],
  setMessages: (messages) => set(() => ({ messages })),
}));

export default useChatStore;
