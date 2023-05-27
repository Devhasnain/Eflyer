import React, { useState, useContext } from "react";
import { DeleteUser } from "@/lib/Apiscalls";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AdminContext } from "@/core/contextApi/adminContext";

type Props = {
  data: any;
};

const DeleteUserForm = ({ data }: Props) => {
  const [loading, setLoading] = useState(false);

  const {adminData} = useContext(AdminContext);


  const HandleDeleteUser = async (data:any) => {
    setLoading(true)
    let submit = await DeleteUser({
        _id: data?._id,
        email: data?.email,
        role: data?.role,
        userrole: adminData?.role,
      });
      setLoading(false);
      if (submit?.status) {
        toast.success(submit?.msg);
      } else {
        setLoading(false);
        if (submit?.response?.data?.msg) {
          toast.error(submit?.response?.data?.msg);
        } else {
          toast.error(submit?.message);
        }
      }
  };

  return (
    <div className="px-12 py-12 flex flex-col flex-wrap space-y-5">
      <div className="space-y-2">
        <h3 className="text-3xl">Confirm the account deletion!</h3>
        <h4 className="text-xl">{data?.email}</h4>
      </div>
      <span className="text-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet
        consequuntur, porro ab sint architecto!
      </span>
      <div className="flex flex-row justify-end">
        <button
          className="py-2 px-5 bg-yellow-500 rounded"
          onClick={() => {HandleDeleteUser(data)}}
        >
          {loading ? (
            <span>
              <BeatLoader color="white" size={8} />
            </span>
          ) : (
            <span>Confirm</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default DeleteUserForm;
