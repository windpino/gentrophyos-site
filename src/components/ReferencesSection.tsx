"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, Flame } from "lucide-react";

export default function ReferencesSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative w-full bg-[#040714] text-white">
      {/* 
        [데스크탑 뷰: 원본 시안 references-main.jpg 100% 풀 화질 원본 표출]
        어두운 오버레이 없이 원본의 관중석 노을, 황금 트로피, 6대 성공사례 카드를 그대로 노출!
      */}
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[16/10] min-h-[640px] lg:min-h-[820px] max-h-[1100px]">
          <Image
            src="/references-main.jpg"
            alt="GenTrophyOS Success Stories"
            fill
            priority
            quality={100}
            className="object-cover object-top"
          />

          {/* 
            [데스크탑 인터랙티브 핫스팟 오버레이]
            첫 번째 카드(이순신장군배 전국윈드서핑대회) 클릭 시 상세 포털 모달 팝업 연결!
          */}
          <div className="absolute inset-0 z-10 hidden md:block max-w-7xl mx-auto px-8 pointer-events-none">
            
            {/* 1. 첫 번째 카드 [이순신장군배 전국윈드서핑대회] 클릭 핫스팟 */}
            <div className="absolute top-[40%] left-[2%] w-[31%] h-[24%] pointer-events-auto">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full h-full rounded-2xl border-2 border-transparent hover:border-[#F4C430] hover:bg-[#F4C430]/10 transition-all flex flex-col justify-end p-4 group cursor-pointer"
                title="제20회 이순신장군배 전국윈드서핑대회 구축 상세 보기"
              >
                <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-[#F4C430] text-[#0B1E3B] text-[10px] font-black px-3 py-1 shadow-md group-hover:scale-105 transition-transform">
                  <Flame className="h-3 w-3" />
                  <span>이순신장군배 포털 상세 보기 ➔</span>
                </span>
              </button>
            </div>

            {/* 2. 하단 와이드 배너 [대회 문의하기] 핫스팟 */}
            <div className="absolute bottom-[4%] right-10 pointer-events-auto">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#F4C430] bg-[#070c1e] text-[#F4C430] hover:bg-[#F4C430] hover:text-[#0B1E3B] px-6 py-2 text-xs font-bold transition-all shadow-md"
              >
                <span>대회 문의하기</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>
        </div>

        {/* 
          [모바일 전용 최적화: 375px~430px]
          작은 화면에서 이순신장군배를 터치하여 상세 모달을 열 수 있도록 카드 제공
        */}
        <div className="md:hidden flex flex-col px-4 py-8 bg-[#080d21] text-white border-t border-white/10">
          <div className="mb-4">
            <span className="text-[11px] font-bold text-[#F4C430] tracking-wider block mb-1">
              SUCCESS STORIES
            </span>
            <h3 className="text-xl font-black text-white">
              GenTrophyOS와 함께한 성공적인 대회들
            </h3>
          </div>

          <div className="rounded-2xl border-2 border-[#F4C430] bg-[#0c1433] p-5 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="rounded-full bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5">
                윈드서핑 대표사례
              </span>
              <span className="text-xs font-bold text-[#F4C430]">통영시</span>
            </div>

            <h4 className="text-lg font-black text-white">
              제20회 이순신장군배 전국윈드서핑대회
            </h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              수해와 기상 악화의 위기를 딛고 실시간 해상 모바일 심판과 온라인 접수 시스템으로 가장 안전하고 완벽하게 치러낸 성공 사례.
            </p>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#F4C430] text-[#0B1E3B] py-3 text-xs font-black shadow-md"
            >
              <span>이순신장군배 공식 사이트 구축화면 보기</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <Link
            href="/contact"
            className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3.5 text-xs font-bold text-white"
          >
            <span>성공 사례 도입 문의하기</span>
            <ArrowRight className="h-4 w-4 text-[#F4C430]" />
          </Link>
        </div>

      </div>

      {/* ===================== [모달] 이순신장군배 공식 포털 상세 화면 ===================== */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#F4C430]/70 bg-[#070c1e] p-6 sm:p-8 shadow-2xl">
            
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#F4C430] mb-2">
              <Flame className="h-4 w-4" />
              <span>GENTROPHYOS DEPLOYMENT SHOWCASE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white">
              제20회 이순신장군배 전국윈드서핑대회
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              경상남도 통영시 도남동 수륙해수욕장 일원 | 2026. 10. 31(토) ~ 11. 01(일)
            </p>

            <div className="relative my-6 aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl">
              <Image
                src="/yisunsin-windsurfing.png"
                alt="제20회 이순신장군배 전국윈드서핑대회 공식 홈페이지"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-[11px] font-bold text-[#F4C430] block">독자 브랜드 포털</span>
                <strong className="text-sm font-bold text-white block mt-1">거북선 엠블럼 전용 사이트</strong>
                <p className="text-xs text-slate-400 mt-1">개최공시서, 대회요강, 미디어 갤러리 원스톱 배포</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-[11px] font-bold text-emerald-400 block">온라인 실시간 접수</span>
                <strong className="text-sm font-bold text-white block mt-1">선착순 130명 자동 마감</strong>
                <p className="text-xs text-slate-400 mt-1">참가비(30,000원) 결제 및 제출 서류 자동 검증</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-[11px] font-bold text-sky-400 block">실시간 전광판 리더보드</span>
                <strong className="text-sm font-bold text-white block mt-1">해상 모바일 심판 0초 연동</strong>
                <p className="text-xs text-slate-400 mt-1">통신 불량 대비 오프라인 캐싱 및 즉각 순위 확정</p>
              </div>
            </div>

            <div className="rounded-xl bg-amber-500/10 border border-[#F4C430]/30 p-4 text-xs text-slate-200 leading-relaxed">
              💡 <strong>성공 요인:</strong> 수해와 기상 악화로 연기되는 긴박한 위기 상황에서도 주최측은 GenTrophyOS의 원클릭 일정 변경 공지 및 모바일 심판 채점을 통해 단 한 건의 판정 시비 없이 안전하고 공정한 스마트 해상 스포츠 대회를 완성했습니다.
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-full bg-[#F4C430] px-6 py-2.5 text-xs font-black text-[#0B1E3B] hover:brightness-110"
              >
                닫기
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
