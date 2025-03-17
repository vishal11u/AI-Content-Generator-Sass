import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AiOutputProvider } from "@/context/AiOutputContext";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import { ActiveProvider } from "@/context/ActiveContext";

const poppinsFont = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-Content Generator | Free AI Writing Tool",
  description:
    "Generate high-quality AI-powered content effortlessly. Try our free AI content generator now!",
  keywords:
    "AI content generator, free AI writing tool, AI-powered content, content creation, text generator",
  authors: [
    {
      name: "Vishal Shitole",
      url: "https://vishal-shitole-portfolio.netlify.app/",
    },
  ],
  creator: "ai-content-generator",
  applicationName: "AI-Content Generator",
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <link
            rel="canonical"
            href="https://ai-content-generator-sass-1m7q.vercel.app/"
          />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="robots" type="text/plain" href="/robots.txt" />
        </head>
        <body className={`${poppinsFont.className} antialiased`}>
          <SubscriptionProvider>
            <AiOutputProvider>
              <ActiveProvider>{children}</ActiveProvider>
            </AiOutputProvider>
          </SubscriptionProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
