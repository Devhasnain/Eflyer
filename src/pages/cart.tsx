import CartItemsContainer from "@/components/CartItems/CartItemsContainer";
import CartPageGuard from "@/components/CartItems/CartPageGuard";
import RouteShell from "@/components/auth/RouteShell";
import { useAppSelector } from "@/core/redux/store";
import React from "react";

const Cart = () => {
  const Items = useAppSelector((state) => state.ProductState.cartItems);
  return (
    <RouteShell title="Cart">
      <CartPageGuard>
        <CartItemsContainer Items={Items} classNames="" ItemsContainerClassNames="h-screen overflow-scroll"/>
      </CartPageGuard>
    </RouteShell>
  );
};

export default Cart;
