"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Megaphone,
  FileCheck2,
  Cloud,
  Network,
  Gift,
  Check,
  ArrowRight,
  Trophy,
  Users,
  LineChart,
  Star,
  Smartphone,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function FeaturesSection() {
  const featureList = [
    {
      num: "01",
      title: "대회 홍보",
      desc: "다양한 채널을 통한 대회 홍보로 참가자를 모집하세요.",
      badgeColor: "text-blue-500 bg-blue-50 border-blue-100",
      icon: Megaphone,
      bullets: [
        "공식 홈페이지 제작",
        "SNS·포털 연동 홍보",
        "홍보물 디자인 및 인쇄물 제작",
      ],
      mockupType: "promo",
    },
    {
      num: "02",
      title: "참가신청서 접수",
      desc: "온라인 참가신청으로 간편하게 접수하세요.",
      badgeColor: "text-emerald-500 bg-emerald-50 border-emerald-100",
      icon: FileCheck2,
      bullets: [
        "참가자 정보 등록",
        "단체·개인 신청 가능",
        "결제 시스템 연동",
      ],
      mockupType: "registration",
    },
    {
      num: "03",
      title: "ERP 통합 관리",
      desc: "참가자, 팀, 결제, 운영까지 모든 데이터를 한 곳에서!",
      badgeColor: "text-purple-500 bg-purple-50 border-purple-100",
      icon: Cloud,
      bullets: [
        "참가자 관리",
        "팀/조 편성 관리",
        "실시간 데이터 통합 관리",
      ],
      mockupType: "erp",
    },
    {
      num: "04",
      title: "대진표 & 순위 관리",
      desc: "실시간 대진표와 순위를 사이트에서 연동 관리합니다.",
      badgeColor: "text-amber-500 bg-amber-50 border-amber-100",
      icon: Network,
      bullets: [
        "토너먼트 대진표 자동 생성",
        "실시간 경기 결과 반영",
        "선수/팀 순위 실시간 확인",
      ],
      mockupType: "bracket",
    },
    {
      num: "05",
      title: "대회 홍보 & 마케팅",
      desc: "다양한 채널을 통한 홍보와 기념품 굿즈까지!",
      badgeColor: "text-sky-500 bg-sky-50 border-sky-100",
      icon: Megaphone,
      bullets: [
        "SNS 마케팅 연동",
        "맞춤형 홍보 콘텐츠 제작",
        "참가자 대상 알림 서비스",
      ],
      mockupType: "marketing",
    },
    {
      num: "06",
      title: "홍보물 & 굿즈 제작",
      desc: "대회를 더 특별하게 만드는 다양한 홍보물과 굿즈를 제작합니다.",
      badgeColor: "text-rose-500 bg-rose-50 border-rose-100",
      icon: Gift,
      bullets: [
        "배너 / 현수막 / 포스터",
        "기념품 / 티셔츠 / 기념 메달",
        "대회 맞춤형 디자인 제작",
      ],
      mockupType: "goods",
    },
  ];

  return (
    <section id="features" className="relative w-full bg-[#040714] text-white overflow-hidden">
      
      {/* ===================== [상단 히어로 배너: 8K 순수 스포츠 배경] ===================== */}
      <div className="relative min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] w-full flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bg-sports-panorama.jpg"
            alt="GenTrophyOS Key Features"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040714] via-[#040714]/85 to-transparent md:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-[#040714]/40" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20">
          <div className="flex w-full max-w-2xl flex-col text-left">
            
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#F4C430] uppercase mb-3">
              KEY FEATURES
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-white leading-[1.2]">
              대회 운영에 필요한 모든 기능,<br />
              <span className="text-[#F4C430]">GenTrophyOS 하나로!</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
              대회 홍보부터 참가 신청, 운영, 결과 관리까지<br className="hidden xs:inline" />
              스포츠 대회에 필요한 모든 기능을 통합한 토탈 솔루션입니다.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F4C430] via-amber-400 to-amber-500 px-6 py-2.5 text-xs sm:text-sm font-extrabold text-[#0B1E3B] shadow-md hover:brightness-110 active:scale-95 transition-all"
              >
                <span>솔루션 도입 상담 신청</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ===================== [중간 6대 기능 2열 상세 카드 그리드] ===================== */}
      {/* 
        [100% 선명한 네이티브 웹 카드]
        흐릿한 이미지 텍스트가 아닌, 칼날처럼 선명한 타이포그래피와 UI 목업
      */}
      <div className="relative w-full bg-white text-slate-900 py-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {featureList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="group relative flex flex-col sm:flex-row justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:border-[#F4C430] hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col justify-between flex-1 sm:pr-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${item.badgeColor} shadow-xs`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-slate-300 block">
                            {item.num}
                          </span>
                          <h3 className="text-lg font-black text-slate-900 group-hover:text-[#d97706] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-4">
                        {item.desc}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        {item.bullets.map((b, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="h-3.5 w-3.5 text-blue-600 font-bold shrink-0" />
                            <span className="text-xs text-slate-700 font-semibold">
                              {b}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-4 pt-3 flex items-center text-xs font-bold text-[#d97706] hover:underline"
                    >
                      <span>도입 상담 문의</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* 우측 정교한 웹 UI 목업 */}
                  <div className="mt-6 sm:mt-0 w-full sm:w-48 lg:w-52 h-44 sm:h-auto rounded-xl bg-slate-50 border border-slate-200/80 p-3 flex flex-col justify-center items-center relative overflow-hidden group-hover:bg-amber-50/20 transition-colors">
                    
                    {item.mockupType === "promo" && (
                      <div className="w-full flex flex-col items-center space-y-2">
                        <div className="w-full rounded-md bg-white border border-slate-200 p-2 shadow-xs">
                          <div className="flex items-center gap-1 mb-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </div>
                          <div className="h-10 rounded bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                            공식 대회 포털
                          </div>
                        </div>
                        <div className="flex gap-1.5 text-[9px] font-bold">
                          <span className="rounded bg-rose-50 text-rose-600 px-1.5 py-0.5 border border-rose-200">INSTA</span>
                          <span className="rounded bg-emerald-50 text-emerald-600 px-1.5 py-0.5 border border-emerald-200">NAVER</span>
                          <span className="rounded bg-blue-50 text-blue-600 px-1.5 py-0.5 border border-blue-200">WEB</span>
                        </div>
                      </div>
                    )}

                    {item.mockupType === "registration" && (
                      <div className="w-full flex flex-col space-y-1.5 text-[10px]">
                        <div className="rounded-lg bg-white border border-slate-200 p-2 shadow-xs">
                          <span className="font-bold text-slate-800 block text-[11px] mb-1">참가신청서</span>
                          <div className="h-4 rounded bg-slate-100 text-[8px] flex items-center px-1.5 text-slate-500 mb-1">
                            이름: 홍길동
                          </div>
                          <div className="h-4 rounded bg-slate-100 text-[8px] flex items-center px-1.5 text-slate-500 mb-1">
                            소속: 서울클럽
                          </div>
                          <div className="h-4 rounded bg-blue-600 text-white font-bold text-[8px] flex items-center justify-center">
                            신청완료 (결제연동)
                          </div>
                        </div>
                      </div>
                    )}

                    {item.mockupType === "erp" && (
                      <div className="w-full flex flex-col space-y-1 text-[9px]">
                        <div className="rounded-lg bg-white border border-slate-200 p-2 shadow-xs">
                          <div className="flex justify-between items-center font-bold text-slate-800 mb-1 border-b pb-1">
                            <span>ERP 명단</span>
                            <span className="text-emerald-600">실시간 연동</span>
                          </div>
                          <div className="flex justify-between text-slate-600 py-0.5">
                            <span>01. 김태풍</span>
                            <span className="text-blue-600 font-bold">결제완료</span>
                          </div>
                          <div className="flex justify-between text-slate-600 py-0.5">
                            <span>02. 박지훈</span>
                            <span className="text-blue-600 font-bold">결제완료</span>
                          </div>
                          <div className="flex justify-between text-slate-600 py-0.5">
                            <span>03. 이영호</span>
                            <span className="text-amber-600 font-bold">접수확인</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.mockupType === "bracket" && (
                      <div className="w-full flex flex-col space-y-1 text-[9px]">
                        <div className="rounded-lg bg-[#070c1e] text-white p-2 shadow-xs">
                          <span className="font-bold text-amber-400 block text-[10px] mb-1">대진표 &amp; 실시간 순위</span>
                          <div className="flex justify-between py-0.5 border-b border-white/10">
                            <span className="text-amber-300 font-bold">1위 피닉스</span>
                            <span>120 pt</span>
                          </div>
                          <div className="flex justify-between py-0.5 border-b border-white/10">
                            <span className="text-slate-300 font-bold">2위 블루타이거</span>
                            <span>118 pt</span>
                          </div>
                          <div className="flex justify-between py-0.5">
                            <span className="text-amber-500 font-bold">3위 화이트이글</span>
                            <span>115 pt</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.mockupType === "marketing" && (
                      <div className="w-full flex flex-col items-center space-y-1.5">
                        <div className="rounded-lg bg-white border border-slate-200 p-2 shadow-xs w-full text-center">
                          <Smartphone className="h-6 w-6 text-sky-500 mx-auto mb-1" />
                          <span className="font-bold text-[10px] text-slate-800 block">카카오·문자 자동 알림</span>
                          <span className="text-[9px] text-slate-400">대진표·출전순서 즉시 발송</span>
                        </div>
                      </div>
                    )}

                    {item.mockupType === "goods" && (
                      <div className="w-full flex flex-col items-center justify-center space-y-1 text-center">
                        <div className="rounded-lg bg-[#070c1e] text-white p-2.5 shadow-xs w-full">
                          <Trophy className="h-5 w-5 text-amber-400 mx-auto mb-1" />
                          <span className="text-[10px] font-black text-amber-300 block">GT 공식 굿즈</span>
                          <span className="text-[8px] text-slate-300">티셔츠 · 메달 · 배너 맞춤 제작</span>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ===================== [하단 5단계 프로세스 와이드 배너] ===================== */}
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

              {/* 5단계 프로세스 흐름 */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold text-white">
                <div className="flex items-center gap-1.5">
                  <Megaphone className="h-4 w-4 text-[#F4C430] shrink-0" />
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

                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-[#F4C430] shrink-0 fill-[#F4C430]" />
                  <span>성적 관리</span>
                </div>
                <ArrowRight className="h-3 w-3 text-slate-500" />

                <div className="flex items-center gap-1.5 text-amber-300">
                  <Gift className="h-4 w-4 text-[#F4C430] shrink-0" />
                  <span>홍보물 제작</span>
                </div>
              </div>

              {/* 우측 캘리그라피 문구 */}
              <div className="hidden xl:block text-right">
                <p className="font-serif italic text-base font-extrabold text-white/90">
                  &ldquo;더 완벽한 대회, 더 큰 감동!&rdquo;
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
