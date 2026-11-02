import type { Metadata, Viewport } from "next";
import "./globals.css";
import GNB from "@/components/GNB";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GenTrophyOS | 스포츠 대회를 더 스마트하게, 이제는 하나의 플랫폼으로",
  description:
    "대회 홍보부터 참가 신청, ERP 운영, 실시간 대진표·순위, 결과 관리까지 스포츠 대회에 필요한 모든 것을 제공하는 B2B SaaS Total Solution.",
  keywords: [
    "GenTrophyOS",
    "젠트로피오에스",
    "스포츠 대회 ERP",
    "대회 공식 홈페이지 제작",
    "온라인 참가신청서 접수",
    "실시간 대진표 순위 관리",
    "모바일 심판",
  ],
  authors: [{ name: "GenTrophyOS by InnerBTGen" }],
  openGraph: {
    title: "GenTrophyOS | Sports Event Total Solution",
    description: "스포츠 대회를 더 스마트하게, 이제는 하나의 플랫폼으로",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#040714",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#040714] text-white antialiased flex flex-col selection:bg-[#F4C430] selection:text-[#0B1E3B]">
        {/* 상단 GNB */}
        <GNB />
        
        {/* 각 메뉴별 독립된 전용 콘텐츠 영역 */}
        <main className="flex-1 w-full flex flex-col">{children}</main>

        {/* 하단 푸터 */}
        <Footer />
      </body>
    </html>
  );
}
