import React from "react";
import DashboardSideBar from "./DashboardSideBar";
import DashboardHeader from "./DashboardHeader";

type Props = {
  children: React.ReactNode;
  title: string;
};

const DashoardContainer = ({ children, title }: Props) => {
  return (
    <div className="flex flex-row pt-3 h-screen overflow-hidden relative bg-gradient-to-b from-white-100 to-yellow-500">
      <DashboardSideBar />
      <div className="flex flex-col w-full">
        <DashboardHeader title={title} />
        <div className="flex flex-row px-3">
        {children}
        </div>
      </div>
    </div>
  );
};

export default DashoardContainer;
