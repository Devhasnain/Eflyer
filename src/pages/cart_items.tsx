import React from "react";
import Container from "@/components/Container";
import SiteHeader from "@/components/SiteHeader";
import CheckOutRedirectionButton from "@/components/Stripe/CheckOutRedirectionButton";
import { useAppSelector } from "@/core/redux/store";
import Head from "next/head";
import Configrations from "@/configrations";
import CartItemsContainer from "@/components/CartItems/CartItemsContainer";

const CartItems = () => {
  const Items = useAppSelector((state) => state.ProductState.cartItems);
  return (
    <>
      <Head>
        <title title="CartItems">{Configrations.site.name} | Cart</title>
      </Head>
      <SiteHeader />
      <div className="min-h-screen bg-white pt-5">
        <Container>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Cart Items</h3>
            <CartItemsContainer Items={Items} classNames="border rounded"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CartItems;