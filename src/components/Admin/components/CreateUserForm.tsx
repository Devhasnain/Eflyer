import React, { useState, useContext } from "react";
import { CreateUser } from "@/lib/Apiscalls";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AdminContext } from "@/core/contextApi/adminContext";

let userroles = ["editor", "admin"];

const CreateUserForm = () => {
  const [loading, setLoading] = useState(false);
  const { adminData } = useContext(AdminContext);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      password: "",
      role: "",
    },
  });

  const onSubmit = async (data: {
    name: string;
    email: string;
    number: string;
    password: string;
    role: string;
  }) => {
    setLoading(true);
    const { name, email, number, password, role } = data;
    let submit = await CreateUser({
      email,
      password,
      number,
      role,
      name,
      userrole: adminData?.role,
    });
    setLoading(false);
    if (submit?.status) {
      toast.success(submit?.msg);
      reset();
    } else {
      setLoading(false);
      if (submit.response.data.msg) {
        toast.error(submit.response.data.msg);
      } else {
        toast.error(submit?.message);
      }
    }
  };

  return (
    <div className="px-10 py-4">
      <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="text-2xl font-bold">Create an admin</h1>
        </div>
        <div className="my-2">
          <label className="block text-md mb-1" htmlFor="email">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            className="px-4 w-full border-2 py-2 text-black rounded-md text-sm outline-none"
            type="text"
            name="name"
            placeholder="name"
          />
        </div>
        <div className="my-2">
          <label className="block text-md mb-1" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className="px-4 w-full border-2 py-2 text-black rounded-md text-sm outline-none"
            type="email"
            name="email"
            placeholder="email"
          />
        </div>
        <div className="my-2">
          <label className="block text-md mb-1" htmlFor="number">
            Number
          </label>
          <input
            {...register("number", { required: true })}
            className="px-4 w-full border-2 py-2 rounded-md text-black text-sm outline-none"
            type="number"
            name="number"
            placeholder="111-155010-15051"
          />
        </div>
        <div className="mt-3">
          <label className="block text-md mb-1" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            className="px-4 w-full border-2 py-2 rounded-md text-black text-sm outline-none"
            type={"text"}
            style={{ background: "transparent" }}
            name="password"
            placeholder="password"
          />
        </div>
        <div className="mt-3">
          <label className="block text-md mb-1" htmlFor="role">
            Role
          </label>
          <select
            className="px-4 w-full border-2 py-2 rounded-md text-black text-sm outline-none"
            {...register("role", { required: true })}
          >
            <option value={""} defaultValue={""}>
              Select user role
            </option>
            {userroles.map((item: string, index: number) => {
              return (
                <option value={item} key={index} id={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="">
          <button
            type="submit"
            className="mt-4 mb-3 w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md transition duration-100"
          >
            {loading ? (
              <span>
                <BeatLoader color="white" size={8} />
              </span>
            ) : (
              <span>Submit Data</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;
