import type { Metadata } from "next";
import ServiceIntroSection from "@/components/ServiceIntroSection";

export const metadata: Metadata = {
  title: "서비스 소개 | GenTrophyOS (젠트로피오에스)",
  description:
    "스포츠 대회, 이제는 하나의 플랫폼으로! 대회 홍보부터 참가 신청, 운영, 결과 관리까지 스포츠 대회에 필요한 모든 것을 하나의 플랫폼에서 제공합니다.",
};

export default function ServicePage() {
  return (
    <div className="flex w-full flex-col">
      <ServiceIntroSection />
    </div>
  );
}
