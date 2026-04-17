import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "个案工作模拟训练平台",
  description: "社会工作个案实务技能训练平台",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body
        className="min-h-full flex flex-col bg-stone-50"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif',
        }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
