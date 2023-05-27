import Button from "@/ui/Button";
import React from "react";

type Props = {
  children?: React.ReactNode;
  items: string[] | any;
};

const Dropdown = ({ items }: Props) => {
  return (
    <>
      <Button classNames="bg-gray-200">
        <span>Categories Dropdown</span>
      </Button>
    </>
  );
};

export default Dropdown;
