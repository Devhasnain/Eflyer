import React from "react";
import Image from "next/image";
import Link from "next/link";
import If from "@/core/If";

type Props = {
  item: {
    name: string;
    description: string;
    price: number | string;
    category: string;
    image: string;
    id: number;
  };
  classNames?: string;
  showImageFirst: boolean;
};

const FeaturedComponent = ({ item, classNames, showImageFirst }: Props) => {
  return (
    <div
      className={`flex flex-col md:flex-row flex-wrap md:items-center pt-24 pb-24 ${classNames}`}
    >
      <If condition={showImageFirst}>
        <div className="flex flex-col md:w-6/12">
          <div className="flex items-center justify-center p-5">
            <Image
              alt=""
              className="rounded-lg"
              src={item.image}
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className="flex flex-col md:w-6/12 space-y-8 relative px-5">
          <div className="text-white absolute top-8 -left-10 z-10 h-10 w-10 bg-red-400 rounded-full flex items-center justify-center">
            <span className="text-sm">{item.price}</span>
          </div>
          <h1 className="text-3xl font-semibold">{item.name}</h1>
          <p className="text-lg">
            {item.description.length > 100 ? (
              item.description
            ) : (
              <>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                tenetur assumenda enim placeat sequi quia illo suscipit ipsam,
                cumque perspiciatis ducimus earum. Esse exercitationem illo
                recusandae velit accusantium architecto reiciendis! Ab molestias
                magni fugit deserunt velit,
                <br />
                <br /> dignissimos beatae autem error aut minima optio deleniti
                maiores similique sunt sed quae aperiam impedit dolore dolorem
                ratione culpa nemo, totam veniam.
              </>
            )}
          </p>
          <div className="">
            <Link
              className="py-3 font-semibold px-4 bg-yellow-500 text-white rounded-lg hover:shadow-lg shadow"
              href={`/product/${item.name}?id=${item.id}`}
            >
              Order Now
            </Link>
          </div>
        </div>
      </If>
      <If condition={!showImageFirst}>
      <div className="flex flex-col md:w-6/12 space-y-8 relative text-end px-5">
          <div className="text-white absolute top-8 -right-10 z-10 h-10 w-10 bg-red-400 rounded-full flex items-center justify-center">
            <span className="text-sm">{item.price}</span>
          </div>
          <h1 className="text-3xl font-semibold">{item.name}</h1>
          <p className="text-lg">
            {item.description.length > 100 ? (
              item.description
            ) : (
              <>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                tenetur assumenda enim placeat sequi quia illo suscipit ipsam,
                cumque perspiciatis ducimus earum. Esse exercitationem illo
                recusandae velit accusantium architecto reiciendis! Ab molestias
                magni fugit deserunt velit,
                <br />
                <br /> dignissimos beatae autem error aut minima optio deleniti
                maiores similique sunt sed quae aperiam impedit dolore dolorem
                ratione culpa nemo, totam veniam.
              </>
            )}
          </p>
          <div className="">
            <Link
              className="py-3 font-semibold px-4 bg-yellow-500 text-white rounded-lg hover:shadow-lg shadow"
              href={`/product/${item.name}?id=${item.id}`}
            >
              Order Now
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:w-6/12">
          <div className="flex items-center justify-center p-5">
            <Image
              alt=""
              className="rounded-lg"
              src={item.image}
              height={400}
              width={400}
            />
          </div>
        </div>
      </If>
    </div>
  );
};

export default FeaturedComponent;
