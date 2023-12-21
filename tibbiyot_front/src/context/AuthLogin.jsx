import { useEffect, useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [oldToken, SetOldToken] = useState(false);
  //   useEffect(()=>{}, [oldToken])
  return (
    <LoginContext.Provider value={{ oldToken, SetOldToken }}>
      {children}
    </LoginContext.Provider>
  );
};
