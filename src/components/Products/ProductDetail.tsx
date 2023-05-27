import React, { useEffect, useState } from "react";
import Divider from "@/core/Divider";
import If from "@/core/If";
import {
  AddItemsToCart,
  RemoveItemFromCart,
} from "@/core/redux/reducers/productSlice";
import { useAppDispatch, useAppSelector } from "@/core/redux/store";
import Image from "next/image";
import Link from "next/link";
type Props = {
  Product: any;
  image?: string;
  name?: string;
  price?: number;
  description?: string;
};

let fakedescription =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, ab! Repudiandae repellat provident voluptates neque ut ipsa necessitatibus ratione aliquam harum mollitia cumque reprehenderit accusantium aut animi sequi, expedita facilis quo fuga, velit assumenda consequatur. Rem numquam, eaque quae ex at, molestiae assumenda error dolorem laborum aliquid et! Repudiandae unde voluptatibus quos ipsa tenetur aperiam ipsum rerum eos, impedit, voluptate illo inventore consequatur tempora. Placeat accusamus eaque quaerat omnis facere ullam fugit mollitia molestiae nam, adipisci reprehenderit ad est labore delectus cum dignissimos perspiciatis, modi voluptatibus. A animi voluptates repellat eius reiciendis aliquid eaque nihil saepe et. Expedita, assumenda vitae.";

const ProductDetail = ({ image, name, price, description, Product }: Props) => {
  const { cartItems } = useAppSelector((state) => state.ProductState);
  const dispatch = useAppDispatch();
  const [qtyCounter, setQtyCounter] = useState<any>();
  // check in the cartItems if current item exists
  const isItemExistsInCart = cartItems.find((element) => {
    if (element?.name.toLowerCase() === Product?.name.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  });

  let totalAmount = price ? price * 1 : 1;

  useEffect(() => {
    let existingitems = localStorage.getItem("browsing_history");
    if (existingitems) {
      let parseitems=JSON.parse(existingitems);
      localStorage.setItem(
        "browsing_history",
        JSON.stringify([Product, ...parseitems])
      );
    } else {
      localStorage.setItem("browsing_history", JSON.stringify([Product]));
    }
  }, [Product, name, image]);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="flex h-auto flex-col md:w-5/12 items-center justify-center space-y-12">
          <div className="flex items-center justify-center md:w-10/12 md:h-64 md:mx-auto p-2">
            <If condition={image}>
              <Image
                src={image ?? ""}
                width={400}
                height={400}
                alt=""
                className=""
              />
            </If>
          </div>
        </div>
        <div className="flex flex-col md:w-5/12 px-6 pt-3">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <Link href={""} className="text-sm text-blue-500">
              Visit Suppliers Profile and Products
            </Link>
            <div>Reviews</div>
            <Divider />
            <div className="text-xl">
              <span className="font-semibold">Price/</span>
              <span className="text-red-600">{price}$</span>
            </div>
            <p>
              {description && description.length > 300 ? (
                description
              ) : (
                <>
                  {description} {fakedescription}
                </>
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:w-2/12 pt-12">
          <div className="border p-5 rounded-xl space-y-3">
            <div className="">
              <span className="text-sm">$</span>
              <span className="text-xl font-semibold text-red-600">
                {price}
              </span>
            </div>
            <p className="text-sm">
              Quia totam doloribus deleniti minus esse error vel cumque, dolorem
              necessitatibus labore?
            </p>
            <Divider />
            <div className="flex items-center justify-between">
              <span>Qty</span>
              <div className="flex space-x-3">
                <button className="bg-gray-200 px-2 font-bold">-</button>
                <span>{1}</span>
                <button className="bg-gray-200 px-2 font-bold">+</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Price</span>
              <span>{price}</span>
            </div>
            <Divider />
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-red-500">{totalAmount} $</span>
            </div>
            <Divider />
            <If condition={Product && isItemExistsInCart}>
              <button
                onClick={() => {
                  dispatch(RemoveItemFromCart(Product));
                }}
                className="px-3 py-1.5 text-sm w-full rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration"
              >
                Remove item from Cart
              </button>
            </If>
            <If condition={Product && !isItemExistsInCart}>
              <button
                onClick={() => {
                  dispatch(AddItemsToCart({ ...Product, qty: qtyCounter }));
                }}
                className="px-3 py-1.5 text-sm w-full rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration"
              >
                Add to Cart
              </button>
            </If>
            <button className="px-3 py-1.5 text-sm w-full rounded-full bg-yellow-500 hover:bg-yellow-400 transition duration">
              Order now
            </button>
          </div>
        </div>
      </div>
      <br />
      <Divider />
      <div className="space-y-4 pt-4 pb-12">
        <h3 className="text-2xl font-semibold">Product Information</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          necessitatibus rerum eius quaerat sapiente, provident vel possimus
          incidunt sunt tempore dignissimos voluptates est temporibus sit nobis
          ut aliquam! Distinctio qui quis commodi quod amet magnam iusto
          accusamus repellat, animi doloremque quo atque tempora voluptatibus
          quaerat odio facilis voluptas? Doloremque, eius nulla porro natus
          laborum hic amet dolor sint voluptates? Dolorum in molestiae, deleniti
          consequuntur fugit sit esse ipsa unde quaerat, numquam, amet incidunt
          reprehenderit? Laboriosam repellendus molestias dolore dolorem
          voluptas.
        </p>
      </div>
    </>
  );
};

export default ProductDetail;
