import If from "@/core/If";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  buttontext?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconclassnames?: string;
};

const Modle = ({
  buttontext,
  children,
  icon,
  iconclassnames,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <If condition={!icon}>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="py-1.5 px-6 rounded hover:shadow-md transition duration hover:shadow-yellow-300 bg-yellow-500 shadow text-white"
        >
          {buttontext && buttontext}
        </button>
      </If>
      <If condition={icon}>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={iconclassnames}
        >
          {icon}
        </div>
      </If>
      <div
        className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black z-20 bg-opacity-50 overflow-hidden ${
          open ? "" : "hidden"
        } `}
      >
        <div className="max-h-full relative w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div
            className="absolute top-3 right-3 h-8 w-8 rounded-full cursor-pointer flex items-center justify-center bg-gray-100 hover:bg-gray-200"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <CgClose />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modle;
