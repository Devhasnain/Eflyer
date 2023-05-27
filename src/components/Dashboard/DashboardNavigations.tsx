import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import If from "@/core/If";
import { useRouter } from "next/router";
import { AuthContext } from "@/core/contextApi/authContext";
import {BsSendCheck} from 'react-icons/bs';

const Links = [
  {
    label: "Dashoard",
    icon: <RxDashboard size={23} />,
    link: "/dashboard",
    type: "link",
  },
  {
    label: "Profile",
    icon: <CgProfile size={23} />,
    link: "/profile",
    type: "link",
  },
  {
    label: "Cart",
    icon: <AiOutlineShoppingCart size={23} />,
    link: "/cart",
    type: "link",
  },
  {
    label: "Orders",
    icon: <BsSendCheck size={23} />,
    link: "/orders",
    type: "link",
  },
  {
    label: "Settings",
    icon: <FiSettings size={23} />,
    link: "/settings",
    type: "link",
  }
];

const DashboardNavigations = () => {
  const router = useRouter();
  const [activepath, setActivePath] = useState<any>(null);
  const { pathname } = router;
  const {setLoggingOut}=useContext(AuthContext);

  useEffect(() => {
    if (pathname) {
      let getActivePath = Links.find((item) => {
        if (item.link === pathname) {
          return item;
        }
      });
      setActivePath(getActivePath);
    }
  }, [pathname]);

  const handleLogout = async () =>{
    setLoggingOut(true);
    setTimeout(() => {
      router.push('/auth/sign-in')
    }, 1000);
  }

  return (
    <div className="flex flex-col space-y-4">
      {Links.map((item, index: number) => {
        return (
          <React.Fragment key={index}>
            <If condition={item.type === "link"}>
              <Link
                className={`flex space-x-3 items-center ${(activepath?.link == item.link)?" bg-yellow-500 shadow-lg" : " bg-yellow-400 "} py-2 px-2 rounded transition duration hover:shadow-lg shadow`}
                href={item.link}
              >
                {item.icon}
                <span className="text-lg">{item.label}</span>
              </Link>
            </If>
          </React.Fragment>
        );
      })}
      <div className="flex items-end h-56">
        <div className="">
          <button onClick={handleLogout} className="px-6 py-2 bg-yellow-500 shadow hover:shadow-lg transition duration hover:bg-yellow-400 rounded flex items-center space-x-5">
            <CiLogout size={23} />
            <span className="text-lg">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavigations;
