import React, { useContext, useEffect } from "react";
import RouteShell from "@/components/auth/RouteShell";
import { useAppDispatch, useAppSelector } from "@/core/redux/store";
import If from "@/core/If";
import OrdersContainer from "@/components/Orders/OrdersContainer";
import Link from "next/link";
import { MdSearchOff } from "react-icons/md";
import { AuthContext } from "@/core/contextApi/authContext";
import { Fetchuserorders } from "@/lib/Apiscalls";
import { SetUserOrders } from "@/core/redux/reducers/productSlice";

const Orders = () => {
  const { userorders } = useAppSelector((state) => state.ProductState);
  const { userData, setUserData } = useContext(AuthContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userData && userData?.orders?.length > 0) {
      if (userorders.length < 1) {
        const fetchorders = async () => {
          const getOrders = await Fetchuserorders();
          if (getOrders?.status) {
            setUserData({ ...userData, orders: getOrders.orders });
            dispatch(SetUserOrders(getOrders.orders));
          }
        };
        fetchorders();
      }
    }
  }, [userData]);

  return (
    <RouteShell title="Orders">
      <div className="flex flex-row flew-wrap pt-4">
        <div className="flex flex-col w-8/12 h-screen overflow-y-scroll">
          <If condition={userorders && userorders.length > 0}>
            <OrdersContainer orders={userorders} />
          </If>
          <If condition={userorders && userorders.length === 0}>
            <div className="flex flex-col h-64 items-center justify-center">
              <MdSearchOff size={70} />
              <h3 className="text-3xl">Your didnot have created any order!</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <br />
              <Link
                href={"/category/"}
                className="px-8 py-2.5 bg-yellow-500 rounded text-white"
              >
                Create an order
              </Link>
            </div>
          </If>
        </div>
        <div className="flex flex-col w-4/12 p-2">
          <div className="rounded-3xl p-6 bg-yellow-500/50">
            <div className="space-y-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, minima. Impedit consequuntur dolorum ex, architecto
                accusantium nesciunt iusto. Harum, beatae!
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis minus fugit consequuntur nobis sapiente ipsa.
              </p>
              <div className="space-y-4">
                <If condition={userData?.orders?.length > 0}>
                  <button className="bg-yellow-500 px-6 py-2 rounded">
                    Cancel Order
                  </button>
                </If>
                <div className="">
                  <Link
                    href={"/category"}
                    className="bg-yellow-500 px-6 py-2 rounded"
                  >
                    Continue Shoping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouteShell>
  );
};

export default Orders;

let fakeOrders = [
  {
    qty: 2,
    created: 3892423,
    pending: true,
    delivered: false,
    deliveredAt: false,
    total: 23123,
    items: [
      {
        id: 0,
        name: "Margherita",
        description: "",
        ingredients: ["tomato sauce", "mozzarella"],
        spicy: false,
        vegetarian: true,
        price: 17.0,
        image: "https://i.imgur.com/8B8YLOo.jpg",
        category: "pizza",
      },
      {
        id: 1,
        name: "Pepperoni",
        description: "",
        ingredients: ["tomato sauce", "mozzarella", "double pepperoni"],
        spicy: false,
        vegetarian: false,
        price: 20.0,
        image: "https://i.imgur.com/OHHctnf.jpg",
        category: "pizza",
      },
    ],
  },
  {
    qty: 2,
    created: 3892423,
    pending: true,
    delivered: false,
    deliveredAt: false,
    total: 23123,
    items: [
      {
        id: 0,
        name: "Margherita",
        description: "",
        ingredients: ["tomato sauce", "mozzarella"],
        spicy: false,
        vegetarian: true,
        price: 17.0,
        image: "https://i.imgur.com/8B8YLOo.jpg",
        category: "pizza",
      },
      {
        id: 1,
        name: "Pepperoni",
        description: "",
        ingredients: ["tomato sauce", "mozzarella", "double pepperoni"],
        spicy: false,
        vegetarian: false,
        price: 20.0,
        image: "https://i.imgur.com/OHHctnf.jpg",
        category: "pizza",
      },
    ],
  },
  {
    qty: 2,
    created: 3892423,
    pending: true,
    delivered: false,
    deliveredAt: false,
    total: 23123,
    items: [
      {
        id: 0,
        name: "Margherita",
        description: "",
        ingredients: ["tomato sauce", "mozzarella"],
        spicy: false,
        vegetarian: true,
        price: 17.0,
        image: "https://i.imgur.com/8B8YLOo.jpg",
        category: "pizza",
      },
      {
        id: 1,
        name: "Pepperoni",
        description: "",
        ingredients: ["tomato sauce", "mozzarella", "double pepperoni"],
        spicy: false,
        vegetarian: false,
        price: 20.0,
        image: "https://i.imgur.com/OHHctnf.jpg",
        category: "pizza",
      },
    ],
  },
  {
    qty: 2,
    created: 3892423,
    pending: true,
    delivered: false,
    deliveredAt: false,
    total: 23123,
    items: [
      {
        id: 0,
        name: "Margherita",
        description: "",
        ingredients: ["tomato sauce", "mozzarella"],
        spicy: false,
        vegetarian: true,
        price: 17.0,
        image: "https://i.imgur.com/8B8YLOo.jpg",
        category: "pizza",
      },
      {
        id: 1,
        name: "Pepperoni",
        description: "",
        ingredients: ["tomato sauce", "mozzarella", "double pepperoni"],
        spicy: false,
        vegetarian: false,
        price: 20.0,
        image: "https://i.imgur.com/OHHctnf.jpg",
        category: "pizza",
      },
    ],
  },
];
