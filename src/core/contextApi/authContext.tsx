import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
type Props = {
  children: React.ReactNode;
};


const defaultValues: any = {};

export const AuthContext = createContext(defaultValues);

export const AuthContextProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<any>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    if (loggingOut) {
      Cookies.remove("secret");
      setIsLoggedIn(false);
      setUserData(null);
      setLoggingOut(false);
    }
  }, [loggingOut]);

  return (
    <AuthContext.Provider
      value={{
        userData,
        isLoggedIn,
        setIsLoggedIn,
        setUserData,
        loggingOut,
        setLoggingOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
