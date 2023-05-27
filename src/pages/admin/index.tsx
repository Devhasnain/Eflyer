import React from "react";
import AdminRouteShell from "@/components/Admin/AdminRouteShell";
import UsersTable from "@/components/Admin/UsersTable";
import {
  AdminContextProvider,
} from "@/core/contextApi/adminContext";
import UserDetails from "@/components/Profile/UserDetails";
import Head from "next/head";
import Configrations from "@/configrations";

const Admin = () => {
  return (
    <>
    <Head>
      <title>{Configrations.site.name} | Admin</title>
    </Head>
    <AdminContextProvider>
      <AdminRouteShell title="Dashboard">
        <div className="flex flex-row">
          <div className="space-y-8 md:w-8/12 px-3 h-screen overflow-y-scroll">
            <UsersTable col="4" tablefor="admins" title="Admins" admins={true} />
            <UsersTable col="4" tablefor="users" title="Users" admins={false} />
          </div>
          <UserDetails/>
        </div>
      </AdminRouteShell>
    </AdminContextProvider>
    </>
  );
};

export default Admin;
