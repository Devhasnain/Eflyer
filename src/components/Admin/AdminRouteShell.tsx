import React, { useEffect, useContext, useState } from "react";
import Admindashboardcontainer from "./components/Admindashboardcontainer";
import { AdminContext } from "@/core/contextApi/adminContext";
import Cookies from "js-cookie";
import { AdminSignin } from "@/lib/Apiscalls";
import { useRouter } from "next/router";
import If from "@/core/If";
import LoadingIndicator from "../LoadingIndicator";

type Props = {
  title: string;
  children: React.ReactNode;
};

const AdminRouteShell = ({ title, children }: Props) => {
  const { adminData, setadminData, isLoggedIn, setIsLoggedIn } =
    useContext(AdminContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (!adminData) {
      const accesstoken = Cookies.get("accesstoken");
      if (accesstoken) {
        const checkLoginStatus = async () => {
          const Auth = await AdminSignin();
          if (Auth?.status) {
            setadminData(Auth?.data);
            setIsLoggedIn(true);
            localStorage.setItem("admin_data", JSON.stringify(Auth?.data));
            Cookies.set("accesstoken", Auth?.accesstoken);
            localStorage.removeItem("user_data");
            Cookies.remove("secret");
            setLoading(false);
          } else {
            localStorage.removeItem("accesstoken");
            Cookies.remove("accesstoken");
            setLoading(false);
            router.push("/admin/sign-in");
          }
        };
        checkLoginStatus();
      } else {
        setLoading(false);
        router.push("/admin/sign-in");
      }
    }else{
      setLoading(false)
    }
  }, []);

  return (
    <>
      <If condition={!loading}>
        <Admindashboardcontainer title={title}>
          {children}
        </Admindashboardcontainer>
      </If>
      <If condition={loading}>
        <LoadingIndicator />
      </If>
    </>
  );
};

export default AdminRouteShell;
