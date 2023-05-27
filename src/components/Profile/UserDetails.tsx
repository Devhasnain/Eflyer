import React, { useContext } from "react";
import ImageContainer from "./ImageContainer";
import { AuthContext } from "@/core/contextApi/authContext";
import If from "@/core/If";
import { AdminContext } from "@/core/contextApi/adminContext";

type Props = {
  classNames?: string;
};

const UserDetails = ({ classNames }: Props) => {
  const { userData } = useContext(AuthContext);
  const { adminData } = useContext(AdminContext);
  return (
    <div className={`flex flex-col md:w-4/12 ${classNames}`}>
      <If condition={userData?.image || userData?.name}>
        <div className="pt-12 flex">
          <ImageContainer image={userData?.image} name={userData?.name} />
        </div>
      </If>

      <If condition={adminData?.image || adminData?.name}>
        <div className="pt-12 flex">
          <ImageContainer image={adminData?.image} name={adminData?.name} />
        </div>
      </If>

      <If condition={userData}>
        <div className="text-center flex flex-col space-y-1 pt-6">
          <h3 className="text-3xl font-semibold">{userData?.name}</h3>
          <span>{userData?.email}</span>
          <span>{userData?.number}</span>
        </div>
      </If>
      <If condition={adminData}>
        <div className="text-center flex flex-col space-y-1 pt-6">
          <h3 className="text-3xl font-semibold">{adminData?.name}</h3>
          <span>{adminData?.email}</span>
          <span>{adminData?.number}</span>
        </div>
      </If>
    </div>
  );
};

export default UserDetails;
