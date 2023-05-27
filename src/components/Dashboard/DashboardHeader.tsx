import React, { useContext, useState } from "react";
import Avatar from "../Avatar";
import { AuthContext } from "@/core/contextApi/authContext";
import { ClipLoader } from "react-spinners";
import { TbReload } from "react-icons/tb";
import { AutoLogin } from "@/lib/Apiscalls";
import { toast } from "react-toastify";
type Props = {
  title: string;
};

const DashboardHeader = ({ title }: Props) => {
  const { userData, setUserData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const HandlePageRefresh = async () => {
    setLoading(true);
    let signin = await AutoLogin();
    if (signin?.status) {
      setUserData(signin?.data);
      localStorage.removeItem("user_data");
      localStorage.setItem("user_data", JSON.stringify(signin?.data));
      setLoading(false);
      localStorage.setItem('cart',JSON.stringify(signin?.data.cart));
      toast.success("Page Reloded successfuly");
    } else {
      setLoading(false);
      toast.error(signin?.message);
    }
  };

  return (
    <div className="flex flex-row border-b pb-3 justify-between items-center">
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
          <Avatar name={userData?.name} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
