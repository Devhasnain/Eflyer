import If from "@/core/If";
import Image from "next/image";
import React from "react";

type Props = {
  image?: string;
  name?: string;
};

const ImageContainer = ({ image, name }: Props) => {
  return (
    <>
      <If condition={image}>
        <div className="mx-auto overflow-hidden ">
          <Image
            height={200}
            className=""
            width={200}
            alt=""
            src={image ?? ""}
          />
        </div>
      </If>
      <If condition={!image && name}>
        <div className="mx-auto">
          <div className="h-32 w-32 flex items-center justify-center text-white text-6xl font-semibold bg-yellow-500 rounded-full">
            <span>{name && name[0]}</span>
          </div>
        </div>
      </If>
    </>
  );
};

export default ImageContainer;
