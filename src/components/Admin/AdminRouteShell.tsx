import React, { useEffect, useContext } from "react";
import Admindashboardcontainer from "./components/Admindashboardcontainer";
import { AdminContext } from "@/core/contextApi/adminContext";
import Cookies from "js-cookie";
import { AdminSignin } from "@/lib/Apiscalls";
import { useRouter } from "next/router";

type Props = {
  title: string;
  children: React.ReactNode;
};

const AdminRouteShell = ({ title, children }: Props) => {
  const { adminData, setadminData, isLoggedIn, setIsLoggedIn } =
    useContext(AdminContext);
  const router = useRouter();

  useEffect(() => {
    if (!adminData && !isLoggedIn) {
      const accesstoken = Cookies.get("accesstoken");
      if (accesstoken) {
        const checkLoginStatus = async () => {
          const Auth = await AdminSignin();
          if (Auth?.status) {
            setadminData(Auth?.data);
            setIsLoggedIn(true);
            localStorage.setItem("admin_data", JSON.stringify(Auth?.data));
            Cookies.set('accesstoken',Auth?.accesstoken);
            localStorage.removeItem('user_data');
            Cookies.remove('secret');
          } else {
            localStorage.removeItem("accesstoken");
            Cookies.remove("accesstoken");
            router.push("/admin/sign-in");
          }
        };
        checkLoginStatus();
      } else {
        router.push("/admin/sign-in");
      }
    }
  }, []);

  return (
    <Admindashboardcontainer title={title}>{children}</Admindashboardcontainer>
  );
};

export default AdminRouteShell;
