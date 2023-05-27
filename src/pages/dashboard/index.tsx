import React from "react";
import RouteShell from "@/components/auth/RouteShell";
import UserDetails from "@/components/Profile/UserDetails";

const Dashboard = () => {
  return <RouteShell title="Dasboard">
    <UserDetails classNames="border-r"/>
  </RouteShell>;
};

export default Dashboard;
