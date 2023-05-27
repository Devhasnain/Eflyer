import React from "react";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { useAppDispatch } from "@/core/redux/store";
import { RemoveItemFromCart } from "@/core/redux/reducers/productSlice";
import Link from "next/link";

type Props = {
  name: string;
  image: string;
  description: string;
  price: number | string;
  id:number|string
};

const CartItem = ({ name, description, price, image,id }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row py-2 space-x-3 hover:bg-yellow-500/100 rounded-lg transition duration items-center bg-yellow-500/50 relative">
      <div
        onClick={() => {
          dispatch(RemoveItemFromCart(name));
        }}
        className="absolute top-0 right-0 h-6 w-6 flex items-center justify-center cursor-pointer"
      >
        <div className="h-5 w-5 rounded-full bg-gray-200 hover:bg-gray-300 hover:shadow-xl transition duration flex items-center justify-center cursor-pointer">
          <IoIosClose size={24}  color="red"/>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl relative">
        <Link href={`/product/${name}?id=${id}`} className="w-full h-full absolute top-0 left-0 z-10">
        </Link>
        <Image
          alt=""
          src={image}
          width={200}
          height={200}
          className="bg-gray-100"
        />
      </div>
      <div className="space-y-2 px-3">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-sm">
          {description.length > 100 ? (
            description
          ) : (
            <>
              Dermive Oil Free Moisturizer with SPF 20 is specifically
              formulated with ceramides, hyaluronic acid & sunscreen.
            </>
          )}
        </p>
        <span className="text-md font-bold text-red-500">{price}/$</span>
      </div>
    </div>
  );
};

export default CartItem;
