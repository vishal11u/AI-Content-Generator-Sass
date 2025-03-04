"use client";
import { usePathname } from "next/navigation";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import React from "react";

const MenuList = [
  { name: "Home", icon: <Home />, path: "/dashboard" },
  { name: "History", icon: <FileClock />, path: "/dashboard/history" },
  { name: "Billing", icon: <WalletCards />, path: "/dashboard/billing" },
  { name: "Setting", icon: <Settings />, path: "/dashboard/setting" },
];

function SideNav() {
  const pathname = usePathname();

  return (
    <div className="h-screen shadow border p-5">
      <div className="flex justify-center border-b pb-6">
        <Image src={"/logo.svg"} alt="logo" height={100} width={100} />
      </div>

      <div className="mt-5">
        {MenuList?.map((list, i) => {
          const isActive = pathname === list.path;

          return (
            <div
              key={i}
              className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer 
                ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-indigo-500 hover:text-white"
                }`}
            >
              {list?.icon}
              <h2>{list?.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
