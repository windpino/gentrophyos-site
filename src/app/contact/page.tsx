import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "고객센터 & 도입 문의 | GenTrophyOS (젠트로피오에스)",
  description:
    "대회 운영의 모든 것, GenTrophyOS와 함께하세요. 1:1 맞춤형 컨설팅, 무료 데모 체험, 지자체·공공지원사업 행정 패키지(과업명세서 초안 및 증빙 서류)를 원스톱으로 지원합니다.",
};

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      <ContactSection />
    </div>
  );
}
