import React, { useState } from "react";
import CloseBackHome from "@/components/auth/CloseBackHome";
import Configrations from "@/configrations";
import { SignInHandler } from "@/lib/Apiscalls";
import Cookies from "js-cookie";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import AuthGuard from "@/components/auth/AuthGuard";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, reset, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);
    const { email, password } = data;
    let submit = await SignInHandler({ email, password });
    setLoading(false);
    if (submit?.status) {
      toast.success(submit?.msg);
      Cookies.set("secret", submit.secret, { expires: 7 });
      reset();
      router.push("/dashboard");
    } else {
      toast.error(submit?.message);
    }
  };
  return (
    <>
      <AuthGuard>
        <Head>
          <title>{Configrations.site.name} | Sign In</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center authPage">
          <div className="flex flex-col w-4/12 md:mx-auto backdrop-blur-xl text-white rounded shadow-md relative">
            <CloseBackHome classNames="-top-2 -right-2" />
            <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <span className="text-sm text-gray-900">Welcome back</span>
                <h1 className="text-2xl font-bold">Login to your account</h1>
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
                <div className="flex  space-x-2 justify-center items-end hover:bg-gray-200 border bg-gray-100 py-2 rounded-md transition duration-100">
                  <Image
                    className="cursor-pointer"
                    src="https://i.imgur.com/arC60SB.png"
                    alt=""
                    height={20}
                    width={20}
                  />
                  <button className="text-black">Sign-in with Google</button>
                </div>
              </div>
              <p className="mt-8 text-center">
                Dont have an account?
                <Link
                  href={"/auth/sign-up"}
                  className="cursor-pointer text-sm text-blue-600"
                >
                  Register now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </AuthGuard>
    </>
  );
};

export default SignIn;
