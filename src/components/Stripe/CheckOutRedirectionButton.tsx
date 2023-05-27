import React, { useContext, useState } from "react";
import Divider from "@/core/Divider";
import If from "@/core/If";
import { AuthContext } from "@/core/contextApi/authContext";
import { useAppSelector } from "@/core/redux/store";
import Link from "next/link";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import Configrations from "@/configrations";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";

const stripePromise = loadStripe(Configrations.stripe_public_key);

const CheckOutRedirectionButton = () => {
  const [loading,setLoading]=useState(false);
  const SiteUrl = Configrations.site.url;
  const router = useRouter();
  let pathname = router.pathname;
  const { isLoggedIn, userData } = useContext(AuthContext);
  const cartItems = useAppSelector((state) => state.ProductState.cartItems);
  const secret = Cookies.get("secret");
  const handleCheckout = async () => {
    setLoading(true)
    const stripe: Stripe | null = await stripePromise;
    if (userData) {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stripe/checkout`,
        {
          items: cartItems,
          success_url: `${SiteUrl}${pathname}`,
          cancel_url: `${SiteUrl}${pathname}`,
        },
        { headers: { secret } }
      );

      const session = await response.data;

      if (stripe && session.id) {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.error(result.error.message);
        }
      }
    }
    setLoading(false)
  };

  return (
    <>
      <If condition={isLoggedIn && userData._id}>
        <button
          type="submit"
          className="font-semibold px-8 text-white py-2.5 bg-yellow-500 rounded"
          onClick={handleCheckout}
        >
         {loading?<BeatLoader color="white" size={8}/>:'Checkout'}
        </button>
      </If>
      <If condition={!isLoggedIn}>
        <Link
          href={"/auth/sign-up"}
          className="px-8 text-white text-center font-semibold py-2.5 bg-yellow-500 rounded"
        >
          Checkout
        </Link>
      </If>
      <Link
        href={"/auth/sign-up"}
        className="px-8 text-center py-2.5 border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white transition duration"
      >
        Continue Shopping
      </Link>
      <div className="space-y-4">
        <div className="pt-4 text-center text-sm">
          <Divider />
          <br />
          <span>Lorem ipsum dolor sit amet consectetur.</span>
          <br />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
    </>
  );
};

export default CheckOutRedirectionButton;
