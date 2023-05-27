import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import RouteShell from "../auth/RouteShell";

type Props = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
};

let Links = [
  {
    label: "General Settings",
    link: "/settings",
  },
  {
    label: "Profile Settings",
    link: "/settings/profile",
  },
  {
    label: "Account Settings",
    link: "/settings/account",
  },
];

const SettingWraper = ({ children, title, subtitle }: Props) => {
  const router = useRouter();
  let activePath = router.pathname;
  return (
    <RouteShell title={title ?? ""}>
      <div className="flex flex-col md:w-3/12 px-2 border-r pt-4">
        <div className="flex flex-col px-3 space-y-4">
          <div className="flex">
            <span className="text-xl font-semibold">{subtitle && subtitle}</span>
          </div>
          {Links.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                href={item.link}
                className={`py-2 px-3 rounded transition duration ${
                  activePath === item.link
                    ? "bg-yellow-500/100"
                    : "bg-yellow-400/100"
                } hover:bg-yellow-500/100 `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-full pt-6 px-3">{children}</div>
    </RouteShell>
  );
};

export default SettingWraper;
