import React, { ReactNode } from "react";
import SideNav from "./_components/SideNav";
import HeaderNav from "./_components/HeaderNav";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
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

export default Layout;
