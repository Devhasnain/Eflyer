import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/core/contextApi/authContext";
import { useRouter } from "next/router";
import If from "@/core/If";
import LoadingIndicator from "../LoadingIndicator";

type Props = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: Props) => {
  const { isLoggedIn, userData } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    if (isLoggedIn && userData) {
      router.push("/dashboard");
      setLoading(false);
    }else{
      setLoading(false)
    }
  }, [isLoggedIn, userData]);

  return (
    <>
      <If condition={loading}>
        <LoadingIndicator />
      </If>
      <If condition={!loading && !isLoggedIn && !userData}>{children}</If>
    </>
  );
};

export default AuthGuard;
