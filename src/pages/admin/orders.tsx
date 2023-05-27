import AdminRouteShell from "@/components/Admin/AdminRouteShell";
import OrdersContainer from "@/components/Admin/components/OrdersContainer";
import { AdminContextProvider } from "@/core/contextApi/adminContext";
import React from "react";

const Orders = () => {
  return (
    <>
      <AdminContextProvider>
        <AdminRouteShell title="Orders">
          <OrdersContainer />
        </AdminRouteShell>
      </AdminContextProvider>
    </>
  );
};

export default Orders;
