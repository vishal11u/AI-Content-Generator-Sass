"use client";
import { usePathname } from "next/navigation";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const MenuList = [
  { name: "Home", icon: <Home />, path: "/dashboard" },
  { name: "History", icon: <FileClock />, path: "/dashboard/history" },
  { name: "Billing", icon: <WalletCards />, path: "/dashboard/billing" },
  { name: "Setting", icon: <Settings />, path: "/dashboard/setting" },
];

function SideNav() {
  const pathname = usePathname();

  return (
    <div className="h-screen shadow border bg-white p-5">
      <div className="flex justify-center border-b pb-6">
        <Image src={"/logo.svg"} alt="logo" height={100} width={100} />
      </div>

      <div className="mt-5">
        {MenuList?.map((list, i) => {
          const isActive = pathname === list.path;

          return (
            <Link href={list?.path} key={i}>
              <div
                className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer  items-center
                ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-indigo-500 hover:text-white"
                }`}
              >
                {list?.icon}
                <h2 className="text-lg">{list?.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
