"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  FileText,
  Send,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Building,
  ShieldCheck,
  Loader2,
  AlertCircle,
  Database,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { submitInquiry } from "@/lib/inquiries";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [savedDocId, setSavedDocId] = useState("");
  const [isSimulated, setIsSimulated] = useState(false);
  const [formData, setFormData] = useState({
    orgName: "",
    eventName: "",
    name: "",
    phone: "",
    email: "",
    scale: "100~300명",
    serviceType: "full-package",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const result = await submitInquiry(formData);
      if (result.success) {
        setSubmitted(true);
        setSavedDocId(result.id || "");
        setIsSimulated(Boolean(result.isSimulated));
      } else {
        setErrorMessage(result.error || "문의 접수 중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    } catch (err: unknown) {
      setErrorMessage("서버 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "시스템 도입까지 준비 기간이 얼마나 걸리나요?",
      a: "기본 템플릿 기준 10분 이내에 대회 전용 독립 홈페이지와 온라인 참가신청 폼이 생성됩니다. 커스텀 채점 규칙 세팅이 필요한 경우에도 통상 1~2일 이내에 모든 세팅이 완료됩니다.",
    },
    {
      q: "지자체 또는 국가지원사업 예산 승인 서류도 지원되나요?",
      a: "네! 국가지원사업 및 지자체 체육진흥기금 예산 집행을 위한 [대회 전용 ERP 과업 명세서] 표준 초안과 전자세금계산서, 지출결의용 견적 패키지를 원스톱으로 무상 제공합니다.",
    },
    {
      q: "야외나 바다(해상)에서 인터넷 통신이 불안정하면 어떻게 하나요?",
      a: "GenTrophyOS는 오프라인 로컬 캐싱 기술이 탑재되어 있어, 일시적으로 통신이 끊겨도 심판 스마트폰에 점수가 안전하게 암호화 보관되며, 네트워크가 재연결되는 즉시 0초 만에 중앙 전광판으로 자동 동기화됩니다.",
    },
    {
      q: "대회가 끝난 후에도 기록을 계속 볼 수 있나요?",
      a: "네, 대회가 종료되어도 역대 수상자, 대진표, 포스터, 기록 데이터가 영구 보존되는 아카이브 포털로 전환되어 평생 열람 가능합니다.",
    },
  ];

  return (
    <section className="relative w-full bg-[#040714] text-white overflow-hidden">
      
      {/* ===================== [상단] 고객센터 히어로 배너 ===================== */}
      <div className="relative min-h-[460px] sm:min-h-[500px] w-full flex items-center border-b border-white/10">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-main.jpg"
            alt="GenTrophyOS Contact Center"
            fill
            priority
            className="object-cover object-top brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040714] via-[#040714]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-[#040714]/50" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pt-12 pb-16 md:px-8">
          <div className="flex w-full max-w-2xl flex-col text-left">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#F4C430] uppercase mb-3">
              SUPPORT &amp; CONSULTING
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.2]">
              대회 도입 문의 및<br />
              <span className="text-[#F4C430]">고객지원 센터</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
              성공적인 대회 개최를 위해 GenTrophyOS 전문 컨설턴트가 1:1로 맞춤 설계해 드립니다.<br className="hidden xs:inline" />
              과업 명세서 초안부터 현장 심판 교육까지 원스톱으로 지원합니다.
            </p>
          </div>
        </div>
      </div>

      {/* ===================== [중간] 도입 문의 폼 & 지원 서비스 ===================== */}
      <div className="relative w-full bg-[#080d21] py-16 md:py-20 border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* 좌측: 고객센터 안내 및 지자체 행정 지원 안내 (5열) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F4C430]/40 bg-[#F4C430]/10 px-3.5 py-1 text-xs font-bold text-[#F4C430] mb-4">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>B2B 엔터프라이즈 맞춤형 지원</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  지자체·공공지원사업<br />
                  <span className="text-[#F4C430]">행정 패키지 무상 지원</span>
                </h2>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
                  공공 예산 집행 승인에 필요한 모든 행정 서류를 GenTrophyOS가 사전에 완벽히 준비해 드립니다.
                </p>

                {/* 3대 행정 혜택 */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <FileText className="h-5 w-5 text-[#F4C430] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-white block">
                        [대회 전용 ERP 구축 과업명세서] 표준안 제공
                      </strong>
                      <span className="text-xs text-slate-400 mt-0.5 block">
                        예산 신청 시 주최측 결재용 표준 서식 즉시 발급
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-white block">
                        지출 증빙 및 결제 정산 패키지
                      </strong>
                      <span className="text-xs text-slate-400 mt-0.5 block">
                        전자세금계산서, 사업자등록증, 통장사본, 승인 견적서 일체
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <Building className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs sm:text-sm font-bold text-white block">
                        결과보고서용 데이터 시각화 자료 원스톱 제공
                      </strong>
                      <span className="text-xs text-slate-400 mt-0.5 block">
                        참가자 통계, 완주율, 종목별 성적 그래프 자동 생성
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 고객센터 직접 연락처 박스 */}
              <div className="mt-8 rounded-2xl border border-[#F4C430]/30 bg-[#0c1433] p-5">
                <span className="text-xs font-bold text-[#F4C430] uppercase block mb-3">
                  DIRECT CONTACT
                </span>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <PhoneCall className="h-4 w-4 text-[#F4C430]" />
                    <span className="font-bold text-white">070-8095-2026</span>
                    <span className="text-[11px] text-slate-400">(평일 09:00 ~ 18:00)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-[#F4C430]" />
                    <span className="text-slate-200">contact@gentrophy.com</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-[#F4C430]" />
                    <span className="text-slate-300">모회사 (주)이너비티젠 본사 ERP 사업부</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 우측: 온라인 솔루션 도입 문의 폼 (7열) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/15 bg-[#0c1433] p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      솔루션 도입 상담 &amp; 무료 데모 신청
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      문의를 남겨주시면 24시간 이내에 담당자가 제안서와 견적을 보내드립니다.
                    </p>
                  </div>
                  <span className="rounded-full bg-[#F4C430] text-[#0B1E3B] text-[10px] font-black px-2.5 py-1">
                    빠른 상담
                  </span>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mb-4 animate-in zoom-in-75 duration-300">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-black text-white">
                      도입 문의가 성공적으로 접수되었습니다!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md">
                      담당자가 신청 내역을 확인한 후, 기재해 주신 연락처와 이메일로 대회 맞춤형 제안서와 과업명세서 초안을 빠르게 전달드리겠습니다.
                    </p>

                    <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs text-slate-400">
                      <Database className="h-3.5 w-3.5 text-[#F4C430]" />
                      <span>
                        {isSimulated
                          ? "데이터 동기화 완료 (로컬 세션)"
                          : `Firebase Cloud Firestore 저장 완료 (ID: ${savedDocId.slice(0, 8)}...)`}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          orgName: "",
                          eventName: "",
                          name: "",
                          phone: "",
                          email: "",
                          scale: "100~300명",
                          serviceType: "full-package",
                          message: "",
                        });
                      }}
                      className="mt-6 rounded-full bg-white/10 px-6 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                    >
                      다른 문의 작성하기
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="flex items-center gap-2 rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-300">
                        <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          주최 / 기관명 <span className="text-[#F4C430]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="예: 통영시요트협회, OO체육회"
                          value={formData.orgName}
                          onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#F4C430] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          대회 명칭 <span className="text-[#F4C430]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="예: 제20회 전국 윈드서핑대회"
                          value={formData.eventName}
                          onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#F4C430] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          담당자 성함 <span className="text-[#F4C430]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="홍길동"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#F4C430] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          연락처 <span className="text-[#F4C430]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="010-1234-5678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#F4C430] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          이메일 <span className="text-[#F4C430]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="admin@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#F4C430] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          예상 참가자 규모
                        </label>
                        <select
                          value={formData.scale}
                          onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-[#070c1e] px-4 py-2.5 text-xs sm:text-sm text-white focus:border-[#F4C430] focus:outline-none"
                        >
                          <option value="100명 미만">100명 미만</option>
                          <option value="100~300명">100~300명 (소·중규모)</option>
                          <option value="300~1,000명">300~1,000명 (중규모)</option>
                          <option value="1,000명 이상">1,000명 이상 (대규모 전국대회)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          필요 서비스
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-[#070c1e] px-4 py-2.5 text-xs sm:text-sm text-white focus:border-[#F4C430] focus:outline-none"
                        >
                          <option value="full-package">풀 패키지 (홈페이지 + 모바일심판 + ERP + 대진표)</option>
                          <option value="scoring">모바일 심판 &amp; 실시간 전광판만</option>
                          <option value="website">공식 웹사이트 및 온라인 참가신청만</option>
                          <option value="custom">맞춤형 커스텀 협의</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">
                        대회 개요 및 문의 사항
                      </label>
                      <textarea
                        rows={3}
                        placeholder="대회 종목, 개최 예정일, 특별히 필요한 심사 규칙(동점자 처리 룰 등)을 자유롭게 적어주세요."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-[#F4C430] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F4C430] via-amber-400 to-amber-500 py-3.5 text-sm font-black text-[#0B1E3B] shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>데이터베이스 전송 중...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>도입 상담 및 견적 신청하기</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ===================== [하단] 자주 묻는 질문 (FAQ) ===================== */}
      <div className="relative w-full bg-[#040714] py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wider">
              FAQ
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              자주 묻는 질문
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#080d21] p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-[#F4C430] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm sm:text-base font-bold text-white block">
                      {faq.q}
                    </strong>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
