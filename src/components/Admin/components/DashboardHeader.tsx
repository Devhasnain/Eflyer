import React, {useContext} from "react";
import Avatar from "@/components/Avatar";
import { AdminContext } from "@/core/contextApi/adminContext";

type Props = {
  title: string;
};

const DashboardHeader = ({ title }: Props) => {
  const {adminData}=useContext(AdminContext);
  return (
    <div className="flex flex-row border-b pb-3 justify-between items-center">
      <div className="px-3 pt-1">
        <div className="">
          <h3 className="text-2xl">{title && title}</h3>
        </div>
      </div>
      <div className="flex pr-5 pt-1">
        <Avatar name={adminData?.name} />
      </div>
    </div>
  );
};

export default DashboardHeader;
