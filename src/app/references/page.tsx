import type { Metadata } from "next";
import ReferencesSection from "@/components/ReferencesSection";

export const metadata: Metadata = {
  title: "성공사례 | GenTrophyOS (젠트로피오에스)",
  description:
    "GenTrophyOS와 함께한 성공적인 대회들 - 제20회 이순신장군배 전국윈드서핑대회 등 다양한 종목과 규모의 대회들이 GenTrophyOS와 함께 더 스마트하고 효율적으로 진행되었습니다.",
};

export default function ReferencesPage() {
  return (
    <div className="flex w-full flex-col">
      <ReferencesSection />
    </div>
  );
}
