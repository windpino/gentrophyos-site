import type { Metadata } from "next";
import FeaturesSection from "@/components/FeaturesSection";

export const metadata: Metadata = {
  title: "기능 안내 | GenTrophyOS (젠트로피오에스)",
  description:
    "대회 운영에 필요한 모든 기능, GenTrophyOS 하나로! 대회 홍보부터 참가 신청, 운영, 결과 관리까지 스포츠 대회에 필요한 모든 기능을 통합한 토탈 솔루션입니다.",
};

export default function FeaturesPage() {
  return (
    <div className="flex w-full flex-col">
      <FeaturesSection />
    </div>
  );
}
