import If from "@/core/If";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  products: any;
  displayHeader: boolean;
  headerTitle: string;
  seeAllLink: string;
  seeAllText: string;
};

const CategoryCard = ({
  products,
  displayHeader,
  seeAllLink,
  headerTitle,
  seeAllText,
}: Props) => {
  return (
    // <div className="flex flex-row flex-wrap">
    //   <If condition={products?.length > 0}>
    //     {products.map((item: any, index: number) => {
    //       return (
    //         <div className="flex p-3 flex-col lg:w-3/12 pb-8" key={index}>
    //           <div className="shadow-md border p-4 space-y-5 bg-white">
    //             <h1 className="text-2xl font-semibold">
    //               {item.title.length > 15 ? (
    //                 <>{item.title.slice(0, 15)}...</>
    //               ) : (
    //                 item.title
    //               )}
    //             </h1>
    //             <div className="flex flex-row flex-wrap h-64 bg-gray-300 rounded overflow-hidden">
    //               {item.images.map((img: string, id: number) => {
    //                 return (
    //                   <div
    //                     className="flex flex-col lg:w-6/12 overflow-hidden p-0"
    //                     key={id}
    //                   >
    //                     <Image
    //                       width={100}
    //                       height={100}
    //                       alt=""
    //                       src={img}
    //                       className="w-full h-32"
    //                     />
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //             <Link
    //               href={"/"}
    //               className="hover:underline transition duration pt-6"
    //             >
    //               <span className="">Shop now</span>
    //             </Link>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </If>
    // </div>

    // dotclick project component
    <>
      <If condition={displayHeader}>
        <div className="flex flex-row justify-between my-3">
          <h1 className="text-3xl font-semibold">{headerTitle}</h1>
          <Link className="text-sm text-blue-500 underline" href={seeAllLink}>
            {seeAllText}
          </Link>
        </div>
      </If>
      <div className="flex flex-row flex-wrap">
        <If condition={products?.length > 0}>
          {products.slice(0, 4).map((item: any, index: number) => {
            return (
              <div className="flex p-3 flex-col lg:w-3/12 pb-8" key={index}>
                <div className="shadow-md border p-4 space-y-5 bg-white">
                  <h1 className="text-2xl font-semibold">{item.category}</h1>
                  <div className="flex flex-row flex-wrap h-64 rounded">
                    {item.items.slice(0, 4).map((food: any, id: number) => {
                      return (
                        <div
                          className="flex flex-col lg:w-6/12 h-32 relative"
                          key={id}
                        >
                          {food?.image ? (
                              <Image
                                width={200}
                                height={200}
                                alt="Image can't be loaded"
                                title={food?.name}
                                src={food?.image}
                                className=""
                              />
                          ) : (
                            <div className="w-full h-full bg-white flex items-center justify-center">
                              <span> Image can&apos;t be loaded</span>
                            </div>
                          )}
                          <Link
                            className="absolute top-0 left-0 w-full h-full z-10"
                            title={food?.name}
                            href={`/product/${food.name}?id=${food.id}`}
                          ></Link>
                        </div>
                      );
                    })}
                  </div>
                  <Link
                    href={`/category/${item.category}`}
                    className="hover:underline transition duration pt-6"
                  >
                    <span className="">See all</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </If>
      </div>
    </>
  );
};

export default CategoryCard;
