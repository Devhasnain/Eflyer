import { PlaceOrderHandler } from "@/lib/Apiscalls";
import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

type Props = {
  _id: string;
  userrole: string;
};

const PlaceOrder = ({ _id, userrole }: Props) => {
  const [loading, setLoading] = useState(false);
  const Handleplacingorder = async (_id: string,userrole:string) => {
    setLoading(true);
    let submit = await PlaceOrderHandler({ _id, userrole });
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
    <>
      <div className="px-12 py-12 flex flex-col flex-wrap space-y-5">
        <div className="space-y-2">
          <h3 className="text-3xl">Confirm the place order</h3>
          <h4 className="text-xl"></h4>
        </div>
        <span className="text-red-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet
          consequuntur, porro ab sint architecto!
        </span>
        <div className="flex flex-row justify-end">
          <button
            className="py-2 px-5 bg-yellow-500 rounded"
            onClick={() => {
              Handleplacingorder(_id, userrole);
            }}
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
    </>
  );
};

export default PlaceOrder;
