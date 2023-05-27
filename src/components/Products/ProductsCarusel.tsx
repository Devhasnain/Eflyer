import If from "@/core/If";
import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";

type Props = {
  products: any;
  displayHeader?: boolean;
  seeAllLink?: string;
  headerTitle?: string;
  seeAllText?: string;
  authPlay?:boolean;
};

const ProductsCarusel = ({
  products,
  displayHeader,
  seeAllLink,
  seeAllText,
  headerTitle,
  authPlay
}: Props) => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 2000,
    dots: false,
    autoplay: authPlay??true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <If condition={displayHeader}>
        <div className="flex items-center justify-between pt-12">
          <h1 className="text-3xl font-semibold">{headerTitle}</h1>
          <Link
            className="text-sm underline text-blue-500"
            href={seeAllLink ?? ""}
          >
            {seeAllText}
          </Link>
        </div>
      </If>
      <div className="my-6">
        <Slider {...settings}>
          {products.map((item: any, index: number) => {
            return (
              <div className="w-full px-1 cursor-pointer" key={index}>
                <div className="space-y-3 bg-gray-100 p-5 rounded">
                  <div className="h-56 overflow-hidden rounded-xl">
                    <Image
                      width={500}
                      height={500}
                      src={item?.image}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="flex justify-between items-center relative">
                    <h1 className="text-lg font-semibold">{item?.name}</h1>
                    <span className="text-red-500">{item?.price} $</span>
                    <Link
                      className="absolute top-0 left-0 w-full h-full z-10"
                      title={item?.name}
                      href={`/product/${item.name}?id=${item.id}`}
                    ></Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default ProductsCarusel;
