import React, { useEffect} from "react";
import { GetCartItemsFromLocalStorage } from "@/core/redux/reducers/productSlice";
import { useAppDispatch } from "@/core/redux/store";

type Props = {
  children: React.ReactNode;
};

const CartPageGuard = ({ children }: Props) => {
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetCartItemsFromLocalStorage());
  }, []);

  return <>{children}</>;
};

export default CartPageGuard;
