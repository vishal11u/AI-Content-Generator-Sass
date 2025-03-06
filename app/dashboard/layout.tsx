import React, { ReactNode } from "react";
import SideNav from "./_components/SideNav";
import HeaderNav from "./_components/HeaderNav";

interface LayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="md:w-64 fixed hidden md:block">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <HeaderNav />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
