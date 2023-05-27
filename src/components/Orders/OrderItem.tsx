import Image from "next/image";
import React from "react";
type Props = {
  name: string;
  description: string;
  image: string;
  price: number;
};

const OrderItem = ({ name, description, image, price }: Props) => {
  return (
      <div className="flex flex-col rounded-xl py-2 bg-yellow-500/50 px-2">
        <div className="flex flex-row space-x-3">
          <div className="rounded-2xl overflow-hidden">
            <Image src={image[0] ?? ""} alt="" height={300} width={300} />
          </div>
          <div className="">
            <h3 className="text-md font-semibold">{name}</h3>
            <p className="text-sm">
              {(description && description.length<80)? description :<>{description.slice(0,80)}...</>}
            </p>
            <span className="text-red-500 text-sm">{price}$</span>
          </div>
        </div>
      </div>
  );
};

export default OrderItem;
