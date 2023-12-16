import { useState } from "react";
import { createContext } from "react";

export const FanContext = createContext();

export const OquvResurslarProvider = ({ children }) => {
  const [detail, setDetail] = useState("kemadi");
  return (
    <FanContext.Provider value={{ detail, setDetail }}>
      {children}
    </FanContext.Provider>
  );
};
