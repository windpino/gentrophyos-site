"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function GNB() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // 각 메뉴별 독립 전용 라우트 (성공사례는 추후 사례 누적 시 활성화)
  const navLinks = [
    { label: "홈", href: "/" },
    { label: "서비스 소개", href: "/service" },
    { label: "기능 안내", href: "/features" },
    { label: "고객센터", href: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-[#040714]/80 via-[#040714]/40 to-transparent backdrop-blur-[2px]">
      {/* 
        [모바일 퍼스트 지침 준수]
        기본: 375px~430px 모바일 h-16, px-4
        확장: md:h-20, md:px-8, max-w-7xl
      */}
      <div className="mx-auto flex h-16 sm:h-20 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        
        {/* 좌측: 원본 로고 디자인과 일치하는 브랜드 로고 */}
        <BrandLogo size="md" showSlogan={true} theme="dark" />

        {/* 데스크탑 중앙 메뉴 (원본 디자인의 폰트 및 골드 언더라인) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1.5 text-xs lg:text-sm tracking-wide transition-all ${
                  isActive
                    ? "text-white font-extrabold"
                    : "text-slate-200/90 font-medium hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2.5px] w-6 rounded-full bg-[#F4C430] shadow-sm shadow-amber-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* 우측 CTA: [대회 문의하기 ➔] (원 시안과 동일한 골드 아웃라인 둥근 필 버튼) */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 rounded-full border border-[#F4C430] bg-[#070c1e]/40 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white shadow-md hover:bg-[#F4C430] hover:text-[#0B1E3B] active:scale-95 transition-all md:px-5 md:py-2 md:text-xs"
          >
            <span>대회 문의하기</span>
            <ArrowRight className="h-3 w-3 text-[#F4C430] group-hover:text-[#0B1E3B]" />
          </Link>

          {/* 모바일 햄버거 토글 */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-black/40 text-slate-200 hover:text-white md:hidden backdrop-blur-md"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* 모바일 드롭다운 메뉴 (열렸을 때만 반투명 다크 글래스 드롭다운) */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#070c1e]/95 backdrop-blur-xl px-4 py-4 md:hidden animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm ${
                    isActive
                      ? "bg-[#F4C430]/15 text-[#F4C430] font-bold border border-[#F4C430]/30"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
