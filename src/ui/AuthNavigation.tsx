import Avatar from "@/components/Avatar";
import If from "@/core/If";
import { AuthContext } from "@/core/contextApi/authContext";
import { useAppSelector } from "@/core/redux/store";
import Link from "next/link";
import React, { useContext } from "react";
import { AiFillShopping } from "react-icons/ai";

const AuthNavigation = () => {
  const cartItems = useAppSelector((state) => state.ProductState.cartItems);
  const { isLoggedIn,userData } = useContext(AuthContext);
  return (
    <>
      <div className="flex flex-row items-center justify-end space-x-4">
        <Link href={"/cart_items"} className="flex items-center relative">
          <If condition={cartItems?.length > 0}>
            <div className="absolute -top-1 -right-3 bg-red-500 flex items-center justify-center text-sm font-semibold shadow h-5 w-5 rounded-full">
              {cartItems.length}
            </div>
          </If>
          <AiFillShopping size={23} />
        </Link>
        <If condition={!isLoggedIn}>
          <div className="flex flex-row justify-center items-center space-x-3">
            <Link href={"/auth/sign-in"} className="py-2 px-4">
              Login
            </Link>
            <Link
              href={"/auth/sign-up"}
              className="py-2 px-4 rounded-lg bg-gray-200"
            >
              Sign Up
            </Link>
          </div>
        </If>
        <If condition={isLoggedIn}>
          <If condition={userData?.name}>
            <Avatar name={userData?.name}/>
          </If>
        </If>
      </div>
    </>
  );
};

export default AuthNavigation;
