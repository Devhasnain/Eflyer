import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/core/contextApi/authContext";
import { AutoLogin, HandleCartItems } from "@/lib/Apiscalls";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useAppSelector } from "@/core/redux/store";

type Props = {
  children: React.ReactNode;
};

const LoginState = ({ children }: Props) => {
  const router = useRouter();
  const { userData, isLoggedIn, setUserData, setIsLoggedIn } =
    useContext(AuthContext);
  const cartItems = useAppSelector((state) => state.ProductState.cartItems);

  useEffect(() => {
    let pathname = router.pathname;
    if (["/cart", "/dashboard", "/profile", "/setting"].includes(pathname)) {
      return;
    } else {
      if (!userData && !isLoggedIn) {
        const checkLoginStatus = async () => {
          let secret = Cookies.get("secret");
          if (secret) {
            const Auth = await AutoLogin();
            if (Auth?.status) {
              setUserData(Auth.data);
              setIsLoggedIn(true);
              localStorage.setItem("user_data", JSON.stringify(Auth.data));
            }else{
              localStorage.removeItem('user_data');
              Cookies.remove('secret');
              router.push('/auth/sign-in')
            }
          } else {
            const userData = localStorage.getItem("user_data");

            if (userData) {
            }
          }
        };

        checkLoginStatus();
      }
    }
  }, []);

  useEffect(() => {
    let cart_items = localStorage.getItem("cart_items");
    if (cart_items && userData) {
      let mycartitems = JSON.parse(cart_items);
      if (mycartitems.length !== userData?.cart) {
        const updateCartItems = async () => {
          let UpdatingCart = await HandleCartItems({ items: mycartitems });
          setUserData({ ...userData, cart: UpdatingCart });
          localStorage.setItem("cart_items", JSON.stringify(UpdatingCart));
        };
        updateCartItems();
      }
    }
  }, [cartItems]);

  return <>{children}</>;
};

export default LoginState;
