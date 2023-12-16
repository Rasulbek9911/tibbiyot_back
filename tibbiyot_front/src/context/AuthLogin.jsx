import { useEffect, useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const localAccessToken = localStorage.getItem("AccessToken");
  const localRefreshToken = localStorage.getItem("RefreshToken");
  const [accessToken, SetAccessToken] = useState(JSON.parse(localAccessToken));
  const [refreshToken, SetRefreshToken] = useState(
    JSON.parse(localRefreshToken)
  );
  useEffect(() => {
    localStorage.setItem("AccessToken", JSON.stringify(accessToken));
  }, [accessToken]);

  useEffect(() => {
    localStorage.setItem("RefreshToken", JSON.stringify(refreshToken));
  }, [refreshToken]);
  return (
    <LoginContext.Provider
      value={{ accessToken, SetAccessToken, refreshToken, SetRefreshToken }}
    >
      {children}
    </LoginContext.Provider>
  );
};
