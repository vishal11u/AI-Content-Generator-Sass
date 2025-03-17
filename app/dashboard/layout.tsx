import React, { ReactNode } from "react";
import SideNav from "./_components/SideNav";
import HeaderNav from "./_components/HeaderNav";

export const metadata = {
  title: "Dashboard | AI-Content Generator",
  description:
    "Manage your AI content generation with ease. Access your dashboard for insights, settings, and tools to optimize your content workflow.",
  keywords:
    "AI content generator dashboard, AI writing tool admin, content management, AI-powered tools",
  applicationName: "AI-Content Generator",
  creator: "ai-content-generator",
  themeColor: "#ffffff",
  openGraph: {
    title: "Dashboard | AI-Content Generator",
    description:
      "Access your personalized AI content dashboard. Manage projects, track usage, and optimize content generation.",
    url: "https://yourwebsite.com/dashboard",
    siteName: "AI-Content Generator",
    type: "website",
  },
  alternates: {
    canonical: "https://yourwebsite.com/dashboard",
  },
};

interface LayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-100 h-screen flex">
      <aside className="md:block md:w-64 md:sticky md:top-0 h-screen bg-white shadow-lg">
        <SideNav />
      </aside>

      <div className="flex-1 flex flex-col">
        <HeaderNav />

        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
