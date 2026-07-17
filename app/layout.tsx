import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wangguan26.github.io"),
  title: "王冠 Wang Guan | LLM Safety & Alignment Researcher",
  description:
    "王冠的个人学术主页：大模型安全对齐、后训练、红队评测、Agent 与代码安全、模型机制分析。",
  keywords: [
    "王冠",
    "Wang Guan",
    "LLM Safety",
    "Safety Alignment",
    "Post-training",
    "Red Teaming",
    "Agent Security",
  ],
  authors: [{ name: "Wang Guan", url: "https://github.com/wangguan26" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "zh_CN",
    url: "/",
    title: "王冠 Wang Guan | LLM Safety & Alignment Researcher",
    description: "大模型安全对齐、后训练、红队评测、Agent 与代码安全研究。",
    siteName: "Wang Guan — Research Portfolio",
  },
  twitter: {
    card: "summary",
    title: "王冠 Wang Guan | LLM Safety & Alignment Researcher",
    description: "大模型安全对齐、后训练、红队评测、Agent 与代码安全研究。",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
