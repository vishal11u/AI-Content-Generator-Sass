"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FileClock, Home, Settings, WalletCards, Menu, X } from "lucide-react";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

const MenuList = [
  { name: "Home", icon: <Home />, path: "/dashboard" },
  { name: "History", icon: <FileClock />, path: "/dashboard/history" },
  { name: "Billing", icon: <WalletCards />, path: "/dashboard/billing" },
  { name: "Setting", icon: <Settings />, path: "/dashboard/setting" },
];

function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden py-5 pl-3.5 flex items-center fixed top-0 left-0 z-50 transition-transform active:scale-90"
      >
        <Menu size={28} className="text-gray-600" />
      </button>

      <div className="h-screen hidden md:block w-64 bg-white shadow border p-5 fixed">
        <div className="flex justify-center border-b pb-6">
          <a
            href="/"
            className="text-xl font-bold text-indigo-600 cursor-pointer"
          >
            AI ContentGen
          </a>
        </div>

        <div className="mt-5">
          {MenuList.map((list, i) => {
            const isActive = pathname === list.path;
            return (
              <Link href={list.path} key={i}>
                <div
                  className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer items-center transition-all
                  ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-indigo-500 hover:text-white"
                  }`}
                >
                  {list.icon}
                  <h2 className="text-lg">{list.name}</h2>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="absolute bottom-10 left-0 w-full">
          <UsageTrack />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-5 z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-600 mb-4 transition-transform active:scale-90"
        >
          <X size={24} />
        </button>

        <div className="flex justify-center border-b pb-6">
          <a
            href="/"
            className="text-xl font-bold text-indigo-600 cursor-pointer"
          >
            AI ContentGen
          </a>
        </div>

        <div className="mt-5">
          {MenuList.map((list, i) => {
            const isActive = pathname === list.path;
            return (
              <Link href={list.path} key={i} onClick={() => setIsOpen(false)}>
                <div
                  className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer items-center transition-all
                  ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-indigo-500 hover:text-white"
                  }`}
                >
                  {list.icon}
                  <h2 className="text-lg">{list.name}</h2>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="absolute bottom-10 left-0 w-full">
          <UsageTrack />
        </div>
      </div>
    </>
  );
}

export default SideNav;
