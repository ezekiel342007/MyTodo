"use client";

import { User } from "@/lib/types";
import { useEffect, createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>,
  user: User | undefined,
  setUser: Dispatch<SetStateAction<User | undefined>>,
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: undefined,
  setUser: () => { },
  setAuthenticated: () => { }
})

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (user)
      setAuthenticated(true);
  }, [user]);


  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
