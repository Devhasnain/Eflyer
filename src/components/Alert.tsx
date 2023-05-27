import If from "@/core/If";
import React, { useEffect } from "react";

type Props = {
  alert?: {
    status: string | null;
    msg: string;
    display: boolean;
  };
  status?: string | null;
  msg?: string;
  display?: string;
};

const Alert = ({ alert, status, msg, display }: Props) => {
  useEffect(() => {}, []);
  return (
    <>
    <div className="absolute top-0"></div>
      <If condition={alert?.display}>
hasndin
      </If>
      <If condition={display}>
        hasnain
      </If>
    </>
  );
};

export default Alert;
