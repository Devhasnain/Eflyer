import If from "@/core/If";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  item: {
    name: string;
    description: string;
    price: string;
    image: string;
    ingredients: string[];
    id: number | string;
  };
};

const CategoryItem = ({ item }: Props) => {
  return (
    <div className="flex p-2 flex-col space-y-3 md:w-4/12">
      <div className="p-3 border bg-gray-50 hover:bg-gray-100 rounded-lg pb-6">
        <div className="overflow-hidden">
          <If condition={item.image}>
            <Image src={item?.image} alt="" height={300} width={300} />
          </If>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">{item.name}</h1>
            <span>{item.price}$</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            dicta tenetur maiores nulla natus reiciendi..
          </p><br/>
          <Link
            href={`/product/${item.name}?id=${item.id}`}
            className="px-6 py-2 bg-yellow-500 rounded text-white shadow"
          >
            Order now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
