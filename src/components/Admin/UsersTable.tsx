import React, { useContext } from "react";
import If from "@/core/If";
import { AdminContext } from "@/core/contextApi/adminContext";
import Table from "./components/Table";
import CreateUserModle from "./components/Modle";
import CreateUserForm from "./components/CreateUserForm";

type Props = {
  title?: string;
  admins?: boolean;
  tablefor: string;
  col:string
};

const UsersTable = ({ title, admins, tablefor,col }: Props) => {
  const { adminData } = useContext(AdminContext);

  return (
    <>
      <div className="bg-white shadow border my-4">
        <header className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
          <If condition={admins}>
            <CreateUserModle buttontext="Add Admin">
              <CreateUserForm/>
            </CreateUserModle>
          </If>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            {adminData && adminData?.admins?.length > 0 ? (
              <Table col={col} tablefor={tablefor} data={adminData?.[tablefor]} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
