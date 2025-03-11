// src/contexts/AuthContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the shape of your context
interface AuthContextType {
  authUser: any; // Replace `any` with a more specific type if you have one
  setAuthUser: React.Dispatch<React.SetStateAction<any>>; // Replace `any` with a more specific type if you have one
}

// Create context with default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the props for AuthContextProvider
interface AuthContextProviderProps {
  children: ReactNode;
}

// Custom hook to use auth context
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
};

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [authUser, setAuthUser] = useState<any>(JSON.parse(localStorage.getItem('data') || 'null'));

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
