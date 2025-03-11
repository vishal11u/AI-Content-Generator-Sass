import React, { ReactNode } from "react";
import SideNav from "./_components/SideNav";
import HeaderNav from "./_components/HeaderNav";

interface LayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-100 h-screen flex">
      <div className="md:block md:w-64 md:sticky md:top-0 h-screen">
        <SideNav />
      </div>
      <div className="flex-1">
        <HeaderNav />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
