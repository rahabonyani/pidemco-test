import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StateWrapper from "@/components/wrappers/StateWrapper";
import ReactQueryProvider from "@/components/wrappers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <StateWrapper>
            {children}
          </StateWrapper>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
