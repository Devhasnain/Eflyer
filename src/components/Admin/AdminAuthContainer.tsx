import React, { useState, useContext } from "react";
import CloseBackHome from "@/components/auth/CloseBackHome";
import Configrations from "@/configrations";
import { AdminSignin } from "@/lib/Apiscalls";
import Cookies from "js-cookie";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AdminContext } from "@/core/contextApi/adminContext";

const AdminAuthContainer = () => {
  const [loading, setLoading] = useState(false);
  const { setadminData, setIsLoggedIn } = useContext(AdminContext);
  const router = useRouter();
  const { register, reset, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);
    const { email, password } = data;
    let submit = await AdminSignin(email, password);
    setLoading(false);
    if (submit?.status) {
      toast.success(submit?.msg);
      setadminData(submit?.data);
      setIsLoggedIn(true);
      localStorage.setItem("admin_data", JSON.stringify(submit?.data));
      Cookies.set("accesstoken", submit?.accesstoken);
      localStorage.removeItem("user_data");
      Cookies.remove("secret");
      reset();
      router.push("/admin");
    } else {
      toast.error(submit?.message);
    }
  };
  return (
    <>
      <Head>
        <title>{Configrations.site.name} | Sign In</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center authPage">
        <div className="flex flex-col w-4/12 md:mx-auto backdrop-blur-xl text-white rounded shadow-md relative">
          <CloseBackHome classNames="-top-2 -right-2" />
          <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <span className="text-sm">Welcome back</span>
              <h1 className="text-2xl font-bold">Login to admin panel</h1>
            </div>
            <div className="my-3">
              <label className="block text-md mb-1" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="px-4 w-full border-2 py-2 rounded-md text-black text-sm outline-none"
                type="email"
                placeholder="email"
              />
            </div>
            <div className="mt-5">
              <label className="block text-md mb-1" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none text-black"
                type="password"
                placeholder="password"
              />
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center space-x-1">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="rememberme"
                  id="rememberme"
                />
                <label className="text-sm" htmlFor="rememberme">
                  Remember Me
                </label>
              </div>
              <span className="text-sm text-blue-700 hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>
            <div className="">
              <button className="mt-4 mb-3 w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md transition duration-100">
                {loading ? (
                  <span>
                    <BeatLoader color="white" size={8} />
                  </span>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminAuthContainer;
