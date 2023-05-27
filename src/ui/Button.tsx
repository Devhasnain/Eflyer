import React from "react";

type Props = {
  children: React.ReactNode;
  classNames: string;
};

const Button = ({ children, classNames }: Props) => {
  return (
    <button className={`rounded-lg px-4 py-2 ${classNames}`}>{children}</button>
  );
};

export default Button;
