import React from "react";
import { formatDistanceToNow } from "date-fns";
type Props = {
  date: number;
};

const Datefns = ({ date }: Props) => {
    const datee = new Date(date * 1000);
  const timeAgo = formatDistanceToNow(datee ?? "", { addSuffix: true });
  return <span className="text-sm">{timeAgo}</span>;
};

export default Datefns;
