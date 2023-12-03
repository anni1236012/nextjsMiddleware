"use client";

import {
  createContext,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type ContextProps = {
  session: boolean; // Change to match the default value in AuthContext
  setSession: Dispatch<SetStateAction<boolean>>;
};

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

const GlobalContext = createContext<ContextProps>({
  session: false,
  setSession: () => {}, // This should be a no-op function
});

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [session, setSession] = useState<boolean>(false); // Initialized to null to match the type

  // When the context provider mounts, initialize session from local storage
  useEffect(() => {
    const savedSession = localStorage.getItem("session");
    if (savedSession) {
      setSession(JSON.parse(savedSession));
    }
  }, []);

  // Whenever the session changes, update it in local storage
  useEffect(() => {
    if (session) {
      localStorage.setItem("session", JSON.stringify(session));
    } else {
      localStorage.removeItem("session");
    }
  }, [session]);
  return (
    <GlobalContext.Provider value={{ session, setSession }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContextProvider = () => useContext(GlobalContext);
