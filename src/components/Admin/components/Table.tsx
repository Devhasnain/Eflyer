import React from "react";
import Image from "next/image";
import If from "@/core/If";
import Avatar from "@/components/Avatar";
import Modle from "./Modle";
import { MdDelete } from "react-icons/md";
import DeleteUserForm from "./DeleteUserForm";

type Props = {
  data: any;
  tablefor: string;
  col: string;
};

const Table = ({ data, tablefor, col }: Props) => {
  return (
    <table className="table-auto flex flex-col">
      <thead className="text-xs font-semibold uppercase">
        <tr className="flex flex-row items-center">
          <th className={`p-2 whitespace-nowrap flex-col flex md:w-${col}/12`}>
            <div className="font-semibold text-left">Name</div>
          </th>
          <th className={`p-2 whitespace-nowrap flex-col flex md:w-${col}/12`}>
            <div className="font-semibold text-left">Email</div>
          </th>
          <th className={`p-2 whitespace-nowrap flex-col flex md:w-${col}/12`}>
            <div className="font-semibold text-left">Number</div>
          </th>
          <If condition={tablefor === "admins"}>
            <th
              className={`p-2 whitespace-nowrap flex-col flex md:w-${col}/12`}
            >
              <div className="font-semibold text-center">Role</div>
            </th>
          </If>
        </tr>
      </thead>
      <tbody className="text-sm divide-gray-100 overflow-y-scroll h-64 pt-4">
        {data &&
          data?.map((item: any, index: number) => {
            return (
              <tr key={index} className="flex flex-row border-t items-center">
                <td className={`p-2 flex-col flex md:w-${col}/12`}>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-2 sm:mr-3">
                      <If condition={item?.image}>
                        <Image
                          className="rounded-full"
                          src={item?.image}
                          alt="Alex Shatov"
                          height={80}
                          width={80}
                        />
                      </If>
                      <If condition={!item?.image}>
                        <Avatar name={item?.name} />
                      </If>
                    </div>
                    <div className="font-medium">{item?.name}</div>
                  </div>
                </td>
                <td className={`p-2 flex-col flex md:w-${col}/12`}>
                  <div className="text-left">{item?.email}</div>
                </td>
                <td className={`p-2 flex-col flex md:w-${col}/12`}>
                  <div className="text-left">{item?.number}</div>
                </td>
                <If condition={tablefor === "admins"}>
                  <td className={`p-2 flex-col flex md:w-${col}/12`}>
                    <div className="text-lg text-center">
                      <span className="text-sm text-green-500 font-semibold">
                        {item?.role}
                      </span>
                    </div>
                  </td>
                </If>
                <If condition={tablefor === "admins"}>
                  <If condition={item?.role !== "super_admin"}>
                    <td className="relative">
                      <Modle
                        icon={<MdDelete size={18} />}
                        iconclassnames="absolute right-1 cursor-pointer -top-2 h-6 w-6 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                      >
                        <DeleteUserForm data={item} />
                      </Modle>
                    </td>
                  </If>
                </If>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
