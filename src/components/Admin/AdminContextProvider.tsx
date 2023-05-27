import React from "react";
import { AdminContextProvider } from "@/core/contextApi/adminContext";
type Props = {
  children: React.ReactNode;
};

const AdminContextProviderComponent = ({ children }: Props) => {
  return (
    <>
      <AdminContextProvider>{children}</AdminContextProvider>
    </>
  );
};

export default AdminContextProviderComponent;
