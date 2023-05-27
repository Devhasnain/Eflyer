import React from "react";
import AdminAuthContainer from "@/components/Admin/AdminAuthContainer";
import AdminContextProviderComponent from "@/components/Admin/AdminContextProvider";

const SignIn = () => {
  return (
    <>
      <AdminContextProviderComponent>
        <AdminAuthContainer />
      </AdminContextProviderComponent>
    </>
  );
};

export default SignIn;
