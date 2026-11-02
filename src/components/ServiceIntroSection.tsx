"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  Cloud,
  ShieldCheck,
  Megaphone,
  FileCheck2,
  Network,
  Gift,
  ArrowRight,
  ChevronRight,
  Users,
  LineChart,
  Star,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function ServiceIntroSection() {
  const serviceCards = [
    {
      num: "01",
      title: "대회 홍보",
      desc: "다양한 채널을 통한 효과적인 대회 홍보 및 홍보물 제작/배포",
      icon: Megaphone,
      color: "text-blue-500 bg-blue-50 border-blue-100",
    },
    {
      num: "02",
      title: "참가신청서 접수",
      desc: "온라인 참가신청으로 간편하게 접수하세요.",
      icon: FileCheck2,
      color: "text-emerald-500 bg-emerald-50 border-emerald-100",
    },
    {
      num: "03",
      title: "ERP 통합 관리",
      desc: "참가자, 팀, 결제, 운영까지 모든 데이터를 한 곳에서!",
      icon: Cloud,
      color: "text-purple-500 bg-purple-50 border-purple-100",
    },
    {
      num: "04",
      title: "대진표 & 순위 관리",
      desc: "실시간 대진표와 순위를 사이트에서 연동 관리합니다.",
      icon: Network,
      color: "text-amber-500 bg-amber-50 border-amber-100",
    },
    {
      num: "05",
      title: "대회 홍보 & 마케팅",
      desc: "다양한 채널을 통한 홍보와 기념품 굿즈까지!",
      icon: Megaphone,
      color: "text-sky-500 bg-sky-50 border-sky-100",
    },
    {
      num: "06",
      title: "홍보물 & 굿즈 제작",
      desc: "대회의 가치를 더하는 맞춤형 홍보물품을 제공합니다.",
      icon: Gift,
      color: "text-rose-500 bg-rose-50 border-rose-100",
    },
  ];

  return (
    <section id="solution" className="relative w-full bg-[#040714] text-white overflow-hidden">
      
      {/* ===================== [상단 히어로: 랩탑 ERP & 모바일 심판 화면이 현장과 100% 일체화된 배경] ===================== */}
      <div className="relative min-h-[600px] sm:min-h-[660px] lg:min-h-[740px] w-full flex items-center">
        
        {/* 현장 대회 데스크 위에 랩탑 ERP와 모바일 심판 화면이 실제로 올려져 있는 8K 일체형 아트워크 */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/service-seamless-hero.jpg"
            alt="GenTrophyOS Tournament ERP and Mobile Scoring seamlessly integrated in tournament site"
            fill
            priority
            quality={100}
            className="object-cover object-center brightness-[0.98]"
          />
          {/* 좌측 텍스트 가독성을 위한 부드러운 자연 비네팅 그라디언트 (이질감 없이 스며듦) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040714] via-[#040714]/75 to-transparent md:w-[58%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-[#040714]/30" />
        </div>

        {/* 좌측 타이포그래피 & 시안 스타일의 3대 원형 특징 칩 */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20">
          <div className="flex w-full max-w-2xl flex-col text-left">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-[#F4C430]" />
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#F4C430] uppercase">
                SERVICE INTRODUCTION
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-white leading-[1.2]">
              스포츠 대회,<br />
              이제는 <span className="text-[#F4C430]">하나의 플랫폼으로!</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              GenTrophyOS는 대회 홍보부터 참가 신청, 운영, 결과 관리까지<br className="hidden xs:inline" />
              스포츠 대회에 필요한 모든 것을 하나의 플랫폼에서 제공합니다.
            </p>

            {/* 시안 스타일의 가로 정렬 3대 특징 칩 (원형 아이콘 + 깔끔한 2줄 텍스트) */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2 shadow-md">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F4C430]/20 text-[#F4C430] border border-[#F4C430]/40">
                  <Trophy className="h-3.5 w-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-xs font-bold text-white block">대회 운영의</span>
                  <span className="text-[10px] text-slate-300">스마트한 혁신</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2 shadow-md">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-400/20 text-sky-400 border border-sky-400/40">
                  <Cloud className="h-3.5 w-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-xs font-bold text-white block">간편한</span>
                  <span className="text-[10px] text-slate-300">원스톱 서비스</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2 shadow-md">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400/40">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-xs font-bold text-white block">데이터 기반의</span>
                  <span className="text-[10px] text-slate-300">공정한 운영</span>
                </div>
              </div>
            </div>

            {/* 솔루션 도입 상담 신청 버튼 */}
            <div className="mt-8 flex items-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F4C430] via-amber-400 to-amber-500 px-7 py-3.5 text-xs sm:text-sm font-black text-[#0B1E3B] shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>솔루션 도입 상담 신청</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>

        {/* 우측 캘리그라피 문구 (시안 재현) */}
        <div className="hidden xl:block absolute right-12 bottom-10 z-10 text-right pointer-events-none select-none">
          <p className="font-serif italic text-2xl xl:text-3xl font-extrabold text-white/90 tracking-wider drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            &ldquo;더 편리한 대회,<br />
            &nbsp;&nbsp;더 큰 감동!&rdquo;
          </p>
        </div>
      </div>

      {/* ===================== [중간] OUR SERVICE 6대 화이트 플로팅 카드 ===================== */}
      <div className="relative w-full bg-white text-slate-900 py-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8">
          
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
            
            {/* 좌측 안내 텍스트 & 자세히 보기 버튼 */}
            <div className="flex flex-col items-start text-left lg:col-span-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-[#F4C430]" />
                <p className="text-xs font-bold tracking-[0.25em] text-[#d97706] uppercase">
                  OUR SERVICE
                </p>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                대회 운영의 모든 것,<br />
                <span className="text-blue-600">GenTrophyOS</span>가<br />
                함께합니다.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                행사 기획부터 참가자 관리, 실시간 운영, 결과까지<br />
                대회의 전 과정을 효율적으로 관리할 수 있는<br />
                스포츠 대회 토탈 솔루션입니다.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#070c1e] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-slate-800 active:scale-95 transition-all"
              >
                <span>서비스 자세히 보기</span>
                <ArrowRight className="h-4 w-4 text-[#F4C430]" />
              </Link>
            </div>

            {/* 우측 6대 서비스 플로팅 카드 */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.num}
                    href="/features"
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#F4C430] hover:shadow-xl hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#F4C430] transition-colors">
                          {card.num}
                        </span>
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${card.color} shadow-xs group-hover:scale-105 transition-transform`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#d97706] transition-colors">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end text-[11px] font-semibold text-slate-400 group-hover:text-[#d97706]">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* ===================== [하단 4단계 프로세스 와이드 배너] ===================== */}
      <div className="relative w-full bg-[#040714] py-8 sm:py-10 px-4 md:px-8 border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl border border-[#F4C430]/40 bg-gradient-to-r from-[#070c1e] via-[#0d1636] to-[#1a120b] p-5 sm:p-7 shadow-2xl">
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              
              {/* 좌측 공식 브랜드 로고 */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <BrandLogo size="md" showSlogan={true} theme="dark" />

                <div className="hidden sm:block h-8 w-[1px] bg-white/10 mx-2" />

                <div>
                  <p className="text-xs text-slate-300">
                    대회의 시작부터, 성공적인 마무리까지
                  </p>
                  <p className="text-sm font-extrabold text-[#F4C430]">
                    GenTrophyOS가 함께합니다.
                  </p>
                </div>
              </div>

              {/* 우측 4단계 프로세스 흐름도 */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-bold text-white">
                <div className="flex items-center gap-1.5">
                  <Trophy className="h-4 w-4 text-[#F4C430] shrink-0" />
                  <span>대회 기획</span>
                </div>
                <ArrowRight className="h-3 w-3 text-slate-500" />

                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-[#F4C430] shrink-0" />
                  <span>참가자 관리</span>
                </div>
                <ArrowRight className="h-3 w-3 text-slate-500" />

                <div className="flex items-center gap-1.5">
                  <LineChart className="h-4 w-4 text-[#F4C430] shrink-0" />
                  <span>실시간 운영</span>
                </div>
                <ArrowRight className="h-3 w-3 text-slate-500" />

                <div className="flex items-center gap-1.5 text-amber-300">
                  <Star className="h-4 w-4 text-[#F4C430] shrink-0 fill-[#F4C430]" />
                  <span>성공적인 결과</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
