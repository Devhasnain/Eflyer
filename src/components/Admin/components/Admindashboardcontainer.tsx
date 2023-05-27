import React from "react";
import DashboardHeader from "./DashboardHeader";
import SideBar from "./SideBar";
type Props = {
  children: React.ReactNode;
  title: string;
};

const Admindashboardcontainer = ({ children, title }: Props) => {
  return (
    <div className="flex flex-row h-screen overflow-hidden relative bg-gradient-to-b from-white-100 to-yellow-500">
      <SideBar />
      <div className="flex flex-col w-full">
        <DashboardHeader title={title} />
        {children}
      </div>
    </div>
  );
};

export default Admindashboardcontainer;
