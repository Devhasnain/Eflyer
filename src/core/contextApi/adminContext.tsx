import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
type Props = {
  children: React.ReactNode;
};


const defaultValues: any = {};

export const AdminContext = createContext(defaultValues);

export const AdminContextProvider = ({ children }: Props) => {
  const [adminData, setadminData] = useState<any>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    if (loggingOut) {
      Cookies.remove("accesstoken");
      setIsLoggedIn(false);
      setadminData(null);
      setLoggingOut(false);
    }
  }, [loggingOut]);

  return (
    <AdminContext.Provider
      value={{
        adminData,
        isLoggedIn,
        setIsLoggedIn,
        setadminData,
        loggingOut,
        setLoggingOut,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
