"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  FileCheck2,
  Cloud,
  Network,
  Megaphone,
  Gift,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Activity,
  Smartphone,
  Trophy,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function HeroSection() {
  const quickFeatures = [
    {
      icon: Globe,
      title: "공식 홈페이지 제작",
      desc: "대회 전용 공식 홈페이지를 맞춤형으로 제작합니다.",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-400/30",
      href: "/features",
    },
    {
      icon: FileCheck2,
      title: "참가신청서 접수",
      desc: "온라인 참가신청으로 간편하게 접수하세요.",
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-400/30",
      href: "/features",
    },
    {
      icon: Cloud,
      title: "ERP 통합 관리",
      desc: "참가자, 팀, 결제, 운영까지 모든 데이터를 한 곳에서!",
      color: "text-sky-400",
      bg: "bg-sky-500/10 border-sky-400/30",
      href: "/features",
    },
    {
      icon: Network,
      title: "대진표 & 순위 관리",
      desc: "실시간 대진표와 순위를 사이트에서 연동 관리합니다.",
      color: "text-amber-300",
      bg: "bg-amber-400/10 border-amber-300/30",
      href: "/features",
    },
    {
      icon: Megaphone,
      title: "대회 홍보 & 마케팅",
      desc: "다양한 채널을 통한 홍보와 기념품 굿즈까지!",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-400/30",
      href: "/features",
    },
    {
      icon: Gift,
      title: "홍보물 & 굿즈 제작",
      desc: "대회의 가치를 더하는 맞춤형 홍보물품을 제공합니다.",
      color: "text-sky-400",
      bg: "bg-sky-500/10 border-sky-400/30",
      href: "/features",
    },
  ];

  const tags = [
    "WEBSITE",
    "REGISTRATION",
    "ERP",
    "BRACKET",
    "PROMOTION",
    "MERCHANDISE",
  ];

  return (
    <section className="relative w-full bg-[#040714] text-white overflow-hidden">
      
      {/* ===================== [상단 히어로 배너] ===================== */}
      <div className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] w-full flex items-center">
        
        {/* 새롭게 생성된 8K 순수 스타디움 트로피 배경 이미지 (텍스트 없는 원본 화질) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bg-hero-stadium.jpg"
            alt="Sports Stadium and Golden Trophy"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
          {/* 가독성을 위한 좌측 소프트 비네팅 그라디언트 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040714] via-[#040714]/80 to-transparent md:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-[#040714]/40" />
        </div>

        {/* 
          [칼날처럼 선명한 웹 텍스트 및 UI 레이아웃]
          모바일 퍼스트: 375px~430px 수직 스택, md:px-8, lg:max-w-7xl
        */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* 좌측 텍스트 콘텐츠 (선명한 웹 타이포그래피) */}
            <div className="flex w-full flex-col text-left lg:col-span-7">
              
              {/* 상단 서브 헤더 */}
              <p className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.25em] text-[#F4C430] uppercase mb-3">
                SPORTS EVENT TOTAL SOLUTION
              </p>

              {/* 공식 브랜드 로고 */}
              <div className="mb-5">
                <BrandLogo size="lg" showSlogan={false} theme="dark" />
              </div>

              {/* 메인 카피 */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-white leading-[1.2]">
                스포츠 대회를 더 스마트하게,<br />
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#F4C430] bg-clip-text text-transparent">
                  이제는 하나의 플랫폼으로
                </span>
              </h1>

              {/* 서브 카피 */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                대회 홍보부터 참가 신청, 운영, 결과 관리까지<br className="hidden xs:inline" />
                스포츠 대회에 필요한 모든 것을 GenTrophyOS가 제공합니다.
              </p>

              {/* 액션 버튼군 */}
              <div className="mt-7 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F4C430] via-amber-400 to-amber-500 px-7 py-3.5 text-xs sm:text-sm font-black text-[#0B1E3B] shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all"
                >
                  <span>지금 대회 솔루션 도입하기</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/service"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 active:scale-95 transition-all"
                >
                  <span>서비스 둘러보기</span>
                  <ChevronRight className="h-4 w-4 text-[#F4C430]" />
                </Link>
              </div>

              {/* 카테고리 태그 바 */}
              <div className="mt-8 flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400">
                {tags.map((tag, idx) => (
                  <span key={tag} className="flex items-center">
                    <span className="hover:text-[#F4C430] transition-colors">{tag}</span>
                    {idx < tags.length - 1 && (
                      <span className="mx-2 text-slate-600">/</span>
                    )}
                  </span>
                ))}
              </div>

            </div>

            {/* 우측: 실제 렌더링된 스마트 ERP 랩탑 & 모바일 디바이스 목업 (선명한 UI) */}
            <div className="lg:col-span-5 hidden lg:flex flex-col items-center relative">
              
              {/* 랩탑 UI 목업 카드 */}
              <div className="w-full max-w-[420px] rounded-2xl border border-white/20 bg-[#070c1e]/90 p-4 shadow-2xl backdrop-blur-xl">
                {/* 윈도우 타이틀바 */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="ml-1 font-mono text-slate-400">GenTrophyOS :: Live ERP</span>
                  </div>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* ERP 대시보드 통계 그리드 */}
                <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                  <div className="rounded-lg bg-white/5 p-2">
                    <span className="text-[9px] text-slate-400 block">총 참가자</span>
                    <strong className="text-xs font-black text-white">1,248명</strong>
                  </div>
                  <div className="rounded-lg bg-white/5 p-2">
                    <span className="text-[9px] text-slate-400 block">결제 완료</span>
                    <strong className="text-xs font-black text-[#F4C430]">99.2%</strong>
                  </div>
                  <div className="rounded-lg bg-white/5 p-2">
                    <span className="text-[9px] text-slate-400 block">실시간 부스</span>
                    <strong className="text-xs font-black text-sky-400">32개소</strong>
                  </div>
                </div>

                {/* 대진표 트리 미리보기 */}
                <div className="rounded-xl border border-white/10 bg-black/40 p-2.5 text-[10px]">
                  <div className="flex justify-between text-slate-400 text-[9px] mb-1">
                    <span>토너먼트 4강 라이브</span>
                    <span className="text-[#F4C430] font-bold">결승 진출전</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/5">
                    <span className="font-bold text-white">팀 피닉스 vs 블루오션</span>
                    <span className="text-[#F4C430] font-mono font-bold">98.5 : 97.0</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="font-bold text-white">화이트이글 vs 드림레이서</span>
                    <span className="text-slate-300 font-mono">경기 준비 중</span>
                  </div>
                </div>
              </div>

              {/* 스마트폰 모바일 심판 탭 플로팅 카드 */}
              <div className="absolute -bottom-6 -right-4 w-44 rounded-2xl border border-[#F4C430]/50 bg-[#0c1433]/95 p-3 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between mb-1.5 text-[9px]">
                  <span className="flex items-center gap-1 text-[#F4C430] font-bold">
                    <Smartphone className="h-3 w-3" /> 모바일 심판
                  </span>
                  <span className="text-emerald-400 font-bold">0초 동기화</span>
                </div>
                <div className="rounded bg-white/10 p-1.5 text-[9px] text-slate-200">
                  <div className="flex justify-between font-bold">
                    <span>배번 07 김도윤</span>
                    <span className="text-[#F4C430]">9.9 pt</span>
                  </div>
                  <div className="mt-1 text-[8px] text-emerald-300">✓ 전광판 즉시 송출됨</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ===================== [하단 6대 핵심 서비스 바] ===================== */}
      {/* 
        [100% 선명한 웹 컴포넌트 렌더링]
        흐릿한 그림이 아닌 칼날처럼 선명한 폰트, SVG 아이콘, 인터랙티브 호버 지원!
      */}
      <div className="relative z-20 border-t border-white/10 bg-[#060a1c]/95 py-10 md:py-12 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8">
          
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
            {quickFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col items-center text-center p-2 rounded-xl transition-all duration-300 hover:-translate-y-1.5"
                >
                  {/* 글로우 아이콘 서클 */}
                  <div
                    className={`relative mb-3 flex h-12 w-12 items-center justify-center rounded-full border shadow-inner ${item.bg} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`h-5 w-5 ${item.color}`} />
                  </div>

                  {/* 제목 (초고화질 웹 폰트) */}
                  <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-[#F4C430] transition-colors mb-1.5">
                    {item.title}
                  </h3>

                  {/* 2줄 설명 */}
                  <p className="text-[11px] text-slate-400 leading-snug break-keep font-normal">
                    {item.desc}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* 맨 하단 파트너 슬로건 라인 */}
          <div className="mt-10 border-t border-white/5 pt-6 text-center">
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              GenTrophyOS — Your Sports Event Partner
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
