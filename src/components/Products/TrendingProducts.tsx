import If from "@/core/If";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  products: any;
  itemTodisplay?:number
};

const TrendingProducts = ({ products, itemTodisplay }: Props) => {
  return (
    <div className="flex flex-row flex-wrap">
      <If condition={products?.length > 0}>
        {products.slice(0,itemTodisplay).map((item: any, index: number) => {
          return (
            <div className="flex p-3 flex-col lg:w-3/12" key={index}>
              <div className="shadow-md border p-4 space-y-3 bg-white">
                <h1 className="text-2xl font-semibold">
                  {item.title.length > 15 ? (
                    <>{item.title.slice(0, 15)}...</>
                  ) : (
                    item.title
                  )}
                </h1>
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded overflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    alt=""
                    src={item.thumbnail}
                    className="w-full h-full"
                  />
                </div>
                <Link
                  href={"/"}
                  className="hover:underline transition duration pt-6"
                >
                  <span className="">Shop now</span>
                </Link>
              </div>
            </div>
          );
        })}
      </If>
    </div>
  );
};

export default TrendingProducts;
