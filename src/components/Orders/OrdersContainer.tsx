import React from "react";
import OrderItem from "./OrderItem";
import If from "@/core/If";
import { MdSearchOff } from "react-icons/md";
import Link from "next/link";
import Datefns from "@/lib/Datefns";

type Props = {
  orders: any;
};

const OrdersContainer = ({ orders }: Props) => {
  let fakeId = Math.random().toString().slice(0, 8);
  let getTotalamount = (items: any) => {
    let total = 0;
    for (let i = 0; i < items?.length; i++) {
      total += items[i]?.price;
    }
    return total;
  };

  return (
    <>
      <If condition={orders && orders?.length === 0}>
        <div className="flex flex-col h-64 items-center justify-center">
          <MdSearchOff size={70} />
          <h3 className="text-3xl">Your didnot have created any order!</h3>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <br />
          <Link
            href={"/category/"}
            className="px-8 py-2.5 bg-yellow-500 rounded text-white"
          >
            Create an order
          </Link>
        </div>
      </If>
      <If condition={orders && orders?.length > 0}>
        {/* <div className="h-screen overflow-y-scroll"> */}

        {orders.map((item: any, index: number) => {
          return (
            <div className="flex flex-col pb-10" key={index}>
              <div className="space-y-4">
                <div className="flex flex-row justify-between py-2 bg-gray-500/5 border-b px-3 rounded">
                  <span className="text-md font-semibold">
                    Order ID: {item?._id}
                  </span>
                  <span>
                    {" "}
                    <Datefns date={item?.created ?? ""} />
                  </span>
                </div>
                <div className="flex flex-row">
                  <div className={`flex flex-col space-y-4 w-8/12 px-2 ${(item?.items?.length>3)?"h-80 overflow-y-scroll":"h-56"}`}>
                    {item?.items &&
                      item?.items.map((orderItem: any, index: number) => {
                        return (
                          <OrderItem
                            imageheight={200}
                            imagewidth={200}
                            key={index}
                            name={orderItem?.name}
                            description={orderItem?.description}
                            price={orderItem?.metadata?.price}
                            image={orderItem?.images}
                          />
                        );
                      })}
                  </div>
                  <div className="flex flex-col w-4/12 px-2 relative">
                    <If condition={item?.status}>
                    <span className="absolute -top-3 p-1 text-white text-xs left-0 bg-green-500 rounded-full">Active</span>
                    </If>
                    <div className="border rounded px-2 py-3 bg-yellow-500/50">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum, doloribus!
                      </p>
                      <div className="">
                        <ul className="text-sm">
                          <li className="flex justify-between">
                            <span className="text-sm">ID:</span>
                            <span className="text-sm">
                              {item?._id ? item?._id : <>{fakeId}</>}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Number of items:</span>
                            <span>{item?.items?.length}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Total Amount:</span>
                            <span>
                              {item?.total
                                ? item?.total
                                : getTotalamount(item?.items)}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Created At:</span>
                            <span className=" font-semibold">
                              <Datefns date={item?.created ?? ""} />
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Status:</span>
                            <span className="text-red-500 font-semibold">
                              <If condition={item?.status}>Active</If>
                              <If condition={!item?.status}>pending...</If>
                              <If condition={item?.status === "delivered"}>
                                Delivered
                              </If>
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Delivered:</span>
                            <span className="text-red-500 font-semibold">
                              {item?.delivered ? (
                                item?.delivered.toString()
                              ) : (
                                <>pending...</>
                              )}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span>Delivered At:</span>
                            <span className="text-red-500 font-semibold">
                              {item?.deliveredAt ? (
                                item?.deliveredAt
                              ) : (
                                <>pending...</>
                              )}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* </div> */}

      </If>
    </>
  );
};

export default OrdersContainer;
