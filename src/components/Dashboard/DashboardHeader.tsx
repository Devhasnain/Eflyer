import React, { useContext } from "react";
import Avatar from "../Avatar";
import { AuthContext } from "@/core/contextApi/authContext";
type Props = {
  title: string;
};

const DashboardHeader = ({ title }: Props) => {
  const { userData } = useContext(AuthContext);
  return (
    <div className="flex flex-row border-b pb-3 justify-between items-center">
      <div className="px-3">
        <div className="">
          <h3 className="text-2xl">{title && title}</h3>
        </div>
      </div>
      <div className="flex pr-5">
        <Avatar name={userData?.name} />
      </div>
    </div>
  );
};

export default DashboardHeader;
