import React, { useContext, useEffect, useState } from "react";
import DashoardContainer from "../Dashboard/DashoardContainer";
import Head from "next/head";
import Configrations from "@/configrations";
import PageGuard from "./PageGuard";
import { AuthContext } from "@/core/contextApi/authContext";
import If from "@/core/If";
import Cookies from "js-cookie";
import { AutoLogin, Fetchuserorders } from "@/lib/Apiscalls";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/core/redux/store";
import { SetUserOrders } from "@/core/redux/reducers/productSlice";

type Props = {
  children: React.ReactNode;
  title: string;
};

const RouteShell = ({ children, title }: Props) => {
  const { isLoggedIn, userData, setUserData, setIsLoggedIn } =
  useContext(AuthContext);
  const router = useRouter();
  let secret = Cookies.get("secret");

  useEffect(() => {
    let pathname = router.pathname;
    if (["/cart", "/dashboard", "/profile", "/setting","/orders","/"].includes(pathname)) {
      if (!userData && !isLoggedIn) {
        if (secret) {
          const checkLoginStatus = async () => {
            const Auth = await AutoLogin();
            if (Auth?.status) {
              setUserData(Auth.data);
              setIsLoggedIn(true);
              localStorage.setItem("user_data", JSON.stringify(Auth.data));
            } else {
              localStorage.removeItem("user_data");
              Cookies.remove("secret");
              router.push("/auth/sign-in");
            }
          };
          checkLoginStatus();
        } else {
          router.push("/auth/sign-in");
        }
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title title={Configrations.site.name}>
          {Configrations.site.name} | {title && title}
        </title>
      </Head>
      <ToastContainer />
      <If condition={isLoggedIn && userData}>
        <DashoardContainer title={title}>{children}</DashoardContainer>;
      </If>
      <If condition={!isLoggedIn && !userData}>
        <PageGuard>
          <DashoardContainer title={title}>{children}</DashoardContainer>;
        </PageGuard>
      </If>
    </>
  );
};

export default RouteShell;
