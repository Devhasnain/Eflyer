import React, { useContext, useState } from "react";
import CloseBackHome from "@/components/auth/CloseBackHome";
import Configrations from "@/configrations";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BiHide, BiShow } from "react-icons/bi";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { SignUpHandler } from "@/lib/Apiscalls";
import AuthGuard from "@/components/auth/AuthGuard";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      number: 0,
    },
  });

  const handleSignUp = async (data: {
    name: string;
    email: string;
    number: number;
    password: string;
  }) => {
    setLoading(true);
    const { name, number, email, password } = data;
    let submit = await SignUpHandler({ name, email, password, number });
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
          <title>{Configrations.site.name} | Sign Up</title>
        </Head>
        <div className="min-h-screen flex items-center justify-center authPage">
          <div className="flex flex-col w-4/12 md:mx-auto backdrop-blur-xl text-white rounded shadow-md relative">
            <CloseBackHome classNames="-top-2 -right-2" />
            <form className="p-8" onSubmit={handleSubmit(handleSignUp)}>
              <div>
                <span className="text-sm">Welcome back</span>
                <h1 className="text-2xl font-bold">Login to your account</h1>
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
                <div className="flex items-center bg-white text-black-500 rounded-md">
                  <input
                    {...register("password", { required: true })}
                    className="px-4 w-full py-2.5 rounded-md text-sm text-black outline-none"
                    type={show ? "text" : "password"}
                    style={{ background: "transparent" }}
                    name="password"
                    placeholder="password"
                  />
                  <div className="px-1">
                    {show ? (
                      <BiHide
                        className="cursor-pointer"
                        onClick={() => {
                          setShow(!show);
                        }}
                        size={16}
                        color="black"
                      />
                    ) : (
                      <BiShow
                        onClick={() => {
                          setShow(!show);
                        }}
                        className="cursor-pointer"
                        color="black"
                        size={16}
                      />
                    )}
                  </div>
                </div>
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
                    <span>Sign Up</span>
                  )}
                </button>
                <div className="flex space-x-2 justify-center items-end hover:bg-gray-200 border bg-gray-100 py-2 rounded-md transition duration-100">
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
              <div className="text-center">
                <span className="mt-4 text-sm text-center">
                  Already have an account?
                  <Link
                    href={"/auth/sign-in"}
                    className="cursor-pointer text-sm text-blue-600"
                  >
                    Sign In
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </AuthGuard>
    </>
  );
};

export default SignUp;
