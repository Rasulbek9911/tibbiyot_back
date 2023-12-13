import { useState } from "react";
import { createContext } from "react";

export const FanContext = createContext();

export const OquvResurslarProvider = ({ children }) => {
  const [Fan, setFan] = useState(null);
  return (
    <FanContext.Provider value={{ Fan, setFan }}>
      {children}
    </FanContext.Provider>
  );
};
