import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#02050f] text-slate-400 py-12 px-4 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-start">
        
        {/* 좌측 로고 및 회사 정보 */}
        <div className="flex flex-col max-w-md">
          <BrandLogo size="md" showSlogan={true} theme="dark" />
          <p className="mt-4 text-xs text-slate-400 leading-relaxed font-normal">
            스포츠, e스포츠, 공모전 등 각종 대회의 참가 접수부터 모바일 심판 채점, 실시간 리더보드, 동점자 자동 순위 산출, 영구 아카이빙까지 원스톱으로 제공하는 B2B 엔터프라이즈 ERP 솔루션.
          </p>
          <div className="mt-4 text-[11px] text-slate-500 space-y-1">
            <p>상호명: (주)이너비티젠 (InnerBTGen Inc.) | 대표이사: 대표이사</p>
            <p>사업자등록번호: 123-86-00000 | 통신판매업신고: 제2026-서울강남-0000호</p>
            <p>주소: 서울특별시 강남구 테헤란로 엔터프라이즈 타워 12층 GenTrophy 사업부</p>
          </div>
        </div>

        {/* 우측 링크 및 고객센터 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
          <div>
            <span className="font-bold text-white block mb-3 text-sm">바로가기</span>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#F4C430] transition-colors">홈</Link></li>
              <li><Link href="/service" className="hover:text-[#F4C430] transition-colors">서비스 소개</Link></li>
              <li><Link href="/features" className="hover:text-[#F4C430] transition-colors">기능 안내</Link></li>
              <li><Link href="/contact" className="hover:text-[#F4C430] transition-colors">고객센터</Link></li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-white block mb-3 text-sm">핵심 솔루션</span>
            <ul className="space-y-2">
              <li className="hover:text-slate-200">독립 웹사이트 빌더</li>
              <li className="hover:text-slate-200">모바일 심판 &amp; 전광판</li>
              <li className="hover:text-slate-200">동점자 AI 산출 엔진</li>
              <li className="hover:text-slate-200">영구 아카이브 기록관</li>
              <li className="hover:text-slate-200">지자체 행정 서류 패키지</li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <span className="font-bold text-white block mb-3 text-sm">고객센터</span>
            <div className="space-y-1 text-xs text-slate-300">
              <p className="font-black text-[#F4C430] text-sm">070-8095-2026</p>
              <p>평일 09:00 ~ 18:00</p>
              <p className="text-[11px] text-slate-400">주말/공휴일 대회 당일 비상 핫라인 운영</p>
              <p className="text-slate-400 pt-1">contact@gentrophy.com</p>
            </div>
          </div>
        </div>

      </div>

      {/* 하단 카피라이트 및 약관 링크 */}
      <div className="mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3 max-w-7xl">
        <p>© 2026 GenTrophyOS by InnerBTGen Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#terms" className="hover:text-slate-300">이용약관</Link>
          <Link href="#privacy" className="hover:text-slate-300 font-bold text-slate-400">개인정보처리방침</Link>
          <Link href="#security" className="hover:text-slate-300">보안정책</Link>
        </div>
      </div>
    </footer>
  );
}
