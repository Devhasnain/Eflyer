import Link from "next/link";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = {
  classNames?: string;
};

const CloseBackHome = ({ classNames }: Props) => {
  return (
    <div className={`absolute ${classNames}`}>
      <Link href={'/'} className="flex bg-gray-100 hover:bg-gray-200 overflow-hidden rounded-full transition duration">
        <AiOutlineCloseCircle size={25} color="black" />
      </Link>
    </div>
  );
};

export default CloseBackHome;
