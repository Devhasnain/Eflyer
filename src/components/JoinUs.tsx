import React, { useContext } from "react";
import Link from "next/link";
import Container from "./Container";
import If from "@/core/If";
import { AuthContext } from "@/core/contextApi/authContext";

const JoinUs = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div className="bg-gray-100 my-24">
      <Container>
        <div className="flex flex-col md:flex-row flex-wrap items-center pt-20 pb-20">
          <div className="flex flex-col md:w-8/12">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold text-yellow-500">
                Lorem ipsum dolor, sit amet <br />
                consectetur.
              </h1>
              <br />
              <span className="text-md font-semibold">
                Lorem ipsum dolor sit.
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus dolorum saepe ex facilis <br />
                vel molestiae dolores nihil voluptate repellat expedita.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-4/12">
            <div className="text-end">
              <If condition={userData}>
                <Link
                  className="py-4 text-white font-semibold text-lg rounded px-8 bg-yellow-500"
                  href={"/dashboard"}
                >
                  Dasboard
                </Link>
              </If>
              <If condition={!userData}>
                <Link
                  className="py-4 text-white font-semibold text-lg rounded px-8 bg-yellow-500"
                  href={"/auth/sign-in"}
                >
                  Join Us
                </Link>
              </If>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JoinUs;
