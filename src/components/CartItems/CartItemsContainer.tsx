import If from "@/core/If";
import React from "react";
import CartItem from "./CartItem";
import { MdSearchOff } from "react-icons/md";
import Link from "next/link";
import CheckOutRedirectionButton from "../Stripe/CheckOutRedirectionButton";

type Props = {
  Items: {
    name: string;
    description: string;
    price: number;
    image: string;
    id: number | string;
  }[];
  classNames?: string;
  ItemsContainerClassNames?: string;
};

const CartItemsContainer = ({
  Items,
  classNames,
  ItemsContainerClassNames,
}: Props) => {
  return (
    <div className={`flex flex-col md:flex-row pt-2 pb-2 px-2 ${classNames}`}>
      <div
        className={`flex flex-col md:w-8/12 px-2 space-y-3 ${ItemsContainerClassNames}`}
      >
        <If condition={Items && Items?.length > 0}>
          {Items.map((item, index) => {
            return (
              <CartItem
                key={index}
                name={item?.name}
                description={item?.description}
                price={item?.price}
                image={item?.image}
                id={item.id}
              />
            );
          })}
        </If>
        <If condition={Items?.length < 1}>
          <div className="flex flex-col h-64 items-center justify-center">
            <MdSearchOff size={70} />
            <h3 className="text-3xl">Your Cart is Empy!</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <br />
            <Link
              href={"/category/"}
              className="px-8 py-2.5 bg-yellow-500 rounded text-white"
            >
              Add Items to Your Cart.
            </Link>
          </div>
        </If>
      </div>
      <div className={`flex flex-col md:w-4/12 border-l p-5 space-y-6`}>
        <span className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tempora at ut exercitationem, modi quos unde impedit saepe harum,
          officiis commodi nisi qui similique quod porro sequi deserunt dicta
          perspiciatis.
        </span>
        <div className="md:w-8/12 bg-gray-100 px-4 pb-4">
          <div className="flex pt-4 justify-between items-center">
            <span className="font-semibold">Items</span>
            <span>{Items.length}</span>
          </div>
          <div className="flex pt-4 justify-between items-center">
            <span className="font-semibold">Total Price</span>
            <span>{PricesesSum(Items)}</span>
          </div>
        </div>
        <CheckOutRedirectionButton />
      </div>
    </div>
  );
};

export default CartItemsContainer;

type Params = {
  name: string;
  description: string;
  price: number;
  image: string;
}[];

const PricesesSum = (Items: Params) => {
  let total = 0;
  for (let i = 0; i < Items.length; i++) {
    total += Items[i].price;
  }
  return total;
};
