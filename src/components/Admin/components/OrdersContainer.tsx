import React, { useContext } from "react";
import OrderItem from "@/components/Orders/OrderItem";
import If from "@/core/If";
import { AdminContext } from "@/core/contextApi/adminContext";
import Link from "next/link";
import { MdSearchOff } from "react-icons/md";
import Datefns from "@/lib/Datefns";
import Modle from "./Modle";
import PlaceOrder from "./PlaceOrder";

const OrdersContainer = () => {
  const { adminData } = useContext(AdminContext);
  let orders = adminData?.orders;
  let fakeId = Math.random().toString().slice(0, 8);
  let getTotalamount = (items: any) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
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
        <div className="h-screen overflow-y-scroll">
          {orders?.map((item: any, index: number) => {
            return (
              <div className="flex flex-col pt-2 bg-gray-100 pb-5" key={index}>
                <div className=" px-2">
                  <div className="bg-white space-y-3">
                    <div className="flex flex-row justify-between py-2 border-b px-3 rounded">
                      <span className="text-md font-semibold">
                        Order ID: {item?._id}
                      </span>
                      <span>
                        <Datefns date={item?.created ?? ""} />
                      </span>
                    </div>
                    <div className="flex flex-row">
                      <div className={`flex flex-col space-y-4 w-8/12 px-2 ${(item?.items.length>3)?"h-80 overflow-y-scroll":"h-56"}`}>
                        {item?.items &&
                          item.items.map((orderItem: any, index: number) => {
                            return (
                              <OrderItem
                                key={index}
                                name={orderItem?.name}
                                description={orderItem?.description}
                                price={orderItem?.metadata?.price}
                                image={orderItem?.images}
                                imageheight={100}
                                imagewidth={100}
                              />
                            );
                          })}
                      </div>
                      <div className="flex flex-col w-4/12 px-2">
                        <div className="border rounded px-3 py-3 space-y-2">
                          <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum, doloribus!
                          </p>
                          <div className="space-y-4">
                            <ul className="text-sm space-y-2">
                              <li className="flex justify-between">
                                <span className="text-sm">Customer ID:</span>
                                <span className="text-sm">
                                  {item?.user?.id ? (
                                    item?.user?.id
                                  ) : (
                                    <>{fakeId}</>
                                  )}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-sm">Customer email:</span>
                                <span className="text-sm">
                                  {item?.user?.email ? (
                                    item?.user?.email
                                  ) : (
                                    <>{fakeId}</>
                                  )}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-sm">ID:</span>
                                <span className="text-sm">
                                  {item._id ? item._id : <>{fakeId}</>}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>Number of items:</span>
                                <span>{item?.items?.length}</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Total Amount:</span>
                                <span>
                                  {item.total
                                    ? item.total
                                    : getTotalamount(item.items)}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>Created At:</span>
                                <span className=" font-semibold text-sm">
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
                                  {item.delivered ? (
                                    item.delivered.toString()
                                  ) : (
                                    <>pending...</>
                                  )}
                                </span>
                              </li>
                              <li className="flex justify-between">
                                <span>Delivered At:</span>
                                <span className="text-red-500 font-semibold">
                                  {item.deliveredAt ? (
                                    item.deliveredAt
                                  ) : (
                                    <>pending...</>
                                  )}
                                </span>
                              </li>
                            </ul>
                            <div className="flex justify-between">
                              <If condition={!item?.status}>
                                <Modle buttontext="Place order">
                                  <PlaceOrder
                                    _id={item?._id}
                                    userrole={adminData?.role}
                                  />
                                </Modle>
                              </If>
                              <If condition={item?.status}>
                                <button
                                  disabled
                                  className="py-2 px-5 text-white bg-yellow-500 rounded"
                                >
                                  Order Placed
                                </button>
                              </If>
                              <If condition={item?.status}>
                              <button className="px-6 py-2 bg-yellow-500 text-white rounded">
                                Deliver
                              </button>
                              </If>
                              <If condition={!item?.status}>
                              <button disabled className="px-6 py-2 bg-yellow-500 text-white rounded" >
                                Deliver
                              </button>
                              </If>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </If>
    </>
  );
};

export default OrdersContainer;
