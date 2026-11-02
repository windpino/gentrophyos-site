import {
  Globe,
  Smartphone,
  Cpu,
  Archive,
  ArrowRight,
  Flame,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function CoreFeatures() {
  const tools = [
    {
      step: "TOOL 01",
      title: "독자 브랜드 웹 빌더",
      sub: "외주 개발비 1,000만 원 아끼는 10초 레버리지",
      icon: Globe,
      color: "border-blue-200 bg-blue-50/50 text-blue-600",
      foolWay: "외주 업체에 수백만 원 주고 몇 주 동안 수정 요청하며 스트레스받기",
      reverseWay: "대회명 입력 후 10초 만에 독립 도메인과 종목별 참가비 결제 폼 배포 완료",
      stat: "웹 구축 비용 90% 세이브",
    },
    {
      step: "TOOL 02",
      title: "모바일 심판 UI & 실시간 전광판",
      sub: "운영 스태프 10명을 대체하는 모바일 치트키",
      icon: Smartphone,
      color: "border-amber-200 bg-amber-50/50 text-amber-600",
      foolWay: "종이 채점표 받아 엑셀에 옮겨 적느라 스태프 10명 갈아 넣고 오타 발생",
      reverseWay: "심판이 스마트폰으로 탭하면 즉시 메인 전광판과 라이브 폰으로 0초 송출",
      stat: "현장 인건비 80% 절감",
    },
    {
      step: "TOOL 03",
      title: "스마트 동점자 산출 엔진",
      sub: "판정 시비와 멱살잡이를 원천 차단하는 알고리즘",
      icon: Cpu,
      color: "border-emerald-200 bg-emerald-50/50 text-emerald-600",
      foolWay: "동점자 나왔을 때 운영석에서 규정집 뒤적이며 항의 참가자와 고성 오가기",
      reverseWay: "승자승·최하점제외 등 복잡한 룰을 클릭 한 번에 0.1초 수학적 자동 판정",
      stat: "판정 분쟁률 0건 달성",
    },
    {
      step: "TOOL 04",
      title: "영구 기록관 (Archive)",
      sub: "소모성 행사를 평생 남는 ‘디지털 자산’으로 전환",
      icon: Archive,
      color: "border-purple-200 bg-purple-50/50 text-purple-600",
      foolWay: "대회 끝나면 엑셀 파일 분실하고 다음 해에 바닥부터 또다시 고생하기",
      reverseWay: "역대 기록·수상자·포스터가 영구 보존되어 지자체 지원금과 스폰서 유치 무기화",
      stat: "차기 후원 유치율 3배 증가",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full border-t border-slate-200 bg-white py-16 md:py-24"
    >
      {/* 
        [모바일 퍼스트 지침]
        기본값: 모바일 375px~430px 구간에서 px-4, 1열 스택
        확장: md(768px) 이상 px-8, lg(1024px) 이상 4열 확장
      */}
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8">
        
        {/* 섹션 헤더 */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1 text-xs font-black text-amber-900 mb-3.5">
            <Flame className="h-3.5 w-3.5 text-amber-600" />
            <span>TITAN&apos;S TOOLS FOR ORGANIZERS</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            노동력을 갈아 넣지 마세요.<br />
            <span className="text-amber-600">
              상위 1% 역행자의 4대 타이탄 도구
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            언제까지 남들과 똑같은 방식으로 일하시겠습니까? 시스템을 소유하고 레버리지하는 순간,
            당신의 대회는 비효율적인 행사에서 압도적인 가치를 지닌 기업형 자산으로 바뀝니다.
          </p>
        </div>

        {/* 
          [4대 도구 카드 그리드: 순리자 vs 역행자 극명 비교]
          기본: grid-cols-1 (375px 모바일)
          확장: md:grid-cols-2, lg:grid-cols-4
        */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-2xl border-2 border-slate-200 bg-slate-50/60 p-5 sm:p-6 transition-all duration-300 hover:border-amber-400 hover:bg-white hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* 상단 뱃지 & 아이콘 */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${item.color} shadow-xs`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-md bg-slate-200/80 px-2 py-0.5 font-mono text-[10px] font-black text-slate-700">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-amber-700">
                    {item.sub}
                  </p>

                  {/* ❌ 99% 순리자의 길 vs 🟢 1% 역행자의 길 비교 박스 */}
                  <div className="mt-5 space-y-3">
                    <div className="rounded-lg bg-rose-50 border border-rose-200/60 p-2.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-700 mb-1">
                        <XCircle className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                        <span>순리자의 낭비</span>
                      </div>
                      <p className="text-[11px] text-rose-900 leading-tight">
                        {item.foolWay}
                      </p>
                    </div>

                    <div className="rounded-lg bg-emerald-50 border border-emerald-200/60 p-2.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 mb-1">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>역행자의 레버리지</span>
                      </div>
                      <p className="text-[11px] text-emerald-950 font-bold leading-tight">
                        {item.reverseWay}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 하단 성과 지표 */}
                <div className="mt-6 border-t border-slate-200 pt-3 flex items-center justify-between">
                  <span className="text-xs font-black text-slate-900">
                    {item.stat}
                  </span>
                  <span className="flex items-center text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                    치트키 장착 <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
