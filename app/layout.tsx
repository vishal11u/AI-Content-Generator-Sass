import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AiOutputProvider } from "@/context/AiOutputContext";

const poppinsFont = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-Content Generator",
  description: "Generate your content using this AI tool for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppinsFont.className} antialiased`}>
          <AiOutputProvider>{children}</AiOutputProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
