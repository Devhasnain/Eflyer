import React from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";

type Props = {
  onSubmit: (password: string, currentpassword: string) => void;
  loading: boolean;
};

const UpdateAccountSettings = ({ onSubmit, loading }: Props) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      currentpassword: "",
      password: "",
    },
  });

  const handleOnSubmit = async (data: {
    password: string;
    currentpassword: string;
  }) => {
    const { password, currentpassword } = data;
    await onSubmit(password, currentpassword);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="md:w-8/12 space-y-5 md:mx-auto rounded shadow p-8 bg-yellow-500/60"
    >
      <div className="flex flex-col">
        <label htmlFor="password">New Password</label>
        <input
          {...register("password", { required: true })}
          type="text"
          placeholder="Password"
          className="px-2 py-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="currentpassword">Current Password</label>
        <input
          {...register("currentpassword", { required: true })}
          type="text"
          placeholder="Current Password"
          className="px-2 py-2 rounded"
        />
      </div>
      <div className="pt-4">
        <button className="px-4 py-2 bg-white rounded shadow">
          {loading ? <BeatLoader size={8} /> : "Change"}
        </button>
      </div>
    </form>
  );
};

export default UpdateAccountSettings;
