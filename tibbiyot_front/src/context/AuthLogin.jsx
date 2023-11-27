import { useEffect, useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const localToken = localStorage.getItem("token");
  const [token, setToken] = useState(JSON.parse(localToken));
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);
  return (
    <LoginContext.Provider value={{ token, setToken }}>
      {children}
    </LoginContext.Provider>
  );
};
