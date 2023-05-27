import React, { useContext } from "react";
import { AuthContext } from "@/core/contextApi/authContext";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";

type Props = {
  onSubmit: (name: string, email: string, number: number) => void;
  loading: boolean;
};

const UpdateProfileForm = ({ onSubmit, loading }: Props) => {
  const { userData } = useContext(AuthContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: userData?.name,
      email: userData?.email,
      number: userData?.number,
    },
  });

  console.log(userData)

  const HandleOnSubmit = (data: {
    name: string;
    email: string;
    number: number;
  }) => {
    let { name, email, number } = data;
    onSubmit(name, email, number);
  };

  return (
    <form
      onSubmit={handleSubmit(HandleOnSubmit)}
      className="md:w-8/12 space-y-5 md:mx-auto rounded shadow p-8 bg-yellow-500/60"
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Name"
          className="px-2 py-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className="px-2 py-2 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="number">Number</label>
        <input
          {...register("number", { required: true })}
          type="number"
          placeholder="6565-4554-4546"
          className="px-2 py-2 rounded"
        />
      </div>
      <div className="pt-4">
        <button className="px-4 py-2 bg-white rounded shadow text-center">
          {loading ? <BeatLoader size={8} /> : "Update"}
        </button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
