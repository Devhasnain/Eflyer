import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/core/contextApi/authContext";
import If from "@/core/If";
import LoadingIndicator from "../LoadingIndicator";
import Cookies from "js-cookie";
import { AutoLogin } from "@/lib/Apiscalls";

type Props = {
  children: React.ReactNode;
};

const PageGuard = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  const { isLoggedIn, userData } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <If condition={loading}>
        <LoadingIndicator />
      </If>
      <If condition={isLoggedIn && userData && !loading}>{children}</If>
    </>
  );
};

export default PageGuard;
