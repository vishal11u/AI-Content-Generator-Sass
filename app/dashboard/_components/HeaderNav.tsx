import { SignedIn, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function HeaderNav() {
  return (
    <div className="py-3 px-5 shadow-sm border-b-2 flex justify-between items-center">
      <div className="flex items-center gap-2 p-2 rounded-md  border max-w-lg">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none " />
      </div>

      <div className="flex items-center gap-6">
        <h2 className="bg-indigo-500 text-white rounded-full text-sm px-3 p-1 cursor-pointer shadow hidden lg:block">
          🔥 Join Membership just for $9.99/month
        </h2>

        <div className="border-2 rounded-full px-2 pt-2 pb-0.5 cursor-pointer hover:bg-indigo-100 hover:border-white">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
