import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 
        [메뉴별 독립 분리 지침 준수]
        홈 화면에서는 다른 메뉴 내용(서비스 소개, 기능 안내, 성공사례)을 아래로 묶어 스크롤하지 않고
        홈 메인 비주얼과 6대 서비스 바만 깔끔하게 단독 노출합니다.
      */}
      <HeroSection />
    </div>
  );
}
