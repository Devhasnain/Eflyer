import React, { useContext, useState } from "react";
import Avatar from "@/components/Avatar";
import { AdminContext } from "@/core/contextApi/adminContext";
import { TbReload } from "react-icons/tb";
import { AdminSignin } from "@/lib/Apiscalls";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

type Props = {
  title: string;
};

const DashboardHeader = ({ title }: Props) => {
  const { adminData, setadminData } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);

  const HandlePageRefresh = async () => {
    setLoading(true);
    let signin = await AdminSignin();
    if (signin?.status) {
      setadminData(signin?.data);
      localStorage.removeItem("admin_data");
      localStorage.setItem("admin_data", JSON.stringify(signin?.data));
      setLoading(false);
      toast.success("Page Reloded successfuly");
    } else {
      setLoading(false);
      toast.error(signin?.message);
    }
  };

  return (
    <div className="flex flex-row border-b justify-between items-center py-2">
      <div className="px-3">
        <div className="">
          <h3 className="text-2xl">{title && title}</h3>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2 pr-2">
        <div
          onClick={HandlePageRefresh}
          className="h-7 w-7 flex items-center justify-center p-1 shadow-md hover:shadow-lg hover:bg-gray-200 cursor-pointer transition duration bg-gray-100 rounded-full"
        >
          {loading ? <ClipLoader size={18} /> : <TbReload size={25} />}
        </div>
        <div className="flex">
          <Avatar name={adminData?.name} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
