import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showSlogan?: boolean;
  theme?: "dark" | "light";
  className?: string;
}

export default function BrandLogo({
  size = "md",
  showSlogan = true,
  theme = "dark",
  className = "",
}: BrandLogoProps) {
  // 크기별 스타일 매핑
  const sizeMap = {
    sm: {
      symbolH: 26,
      symbolW: 32,
      textSize: "text-lg",
      sloganSize: "text-[9px]",
      gap: "gap-2",
    },
    md: {
      symbolH: 34,
      symbolW: 42,
      textSize: "text-xl",
      sloganSize: "text-[10px]",
      gap: "gap-2.5",
    },
    lg: {
      symbolH: 44,
      symbolW: 55,
      textSize: "text-2xl sm:text-3xl",
      sloganSize: "text-xs",
      gap: "gap-3",
    },
    xl: {
      symbolH: 60,
      symbolW: 75,
      textSize: "text-4xl sm:text-5xl",
      sloganSize: "text-xs sm:text-sm",
      gap: "gap-4",
    },
  };

  const currentSize = sizeMap[size];
  const textColor = theme === "dark" ? "text-white" : "text-[#0B1E3B]";
  const sloganColor = theme === "dark" ? "text-slate-300" : "text-slate-500";

  return (
    <Link href="/" className={`group flex items-center ${currentSize.gap} ${className}`}>
      {/* 
        [공식 GT 엠블럼 심볼 마크]
        Champagne Gold (#F4C430) + Silver Gray (#A7B0C0)
      */}
      <div className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg
          width={currentSize.symbolW}
          height={currentSize.symbolH}
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="brandGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="40%" stopColor="#F4C430" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="brandSilver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="50%" stopColor="#A7B0C0" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
          </defs>

          {/* 1. 좌측 샴페인 골드 G-T 메인 날개 (#F4C430) */}
          <path
            d="M 12 18 C 12 10, 18 6, 28 6 L 62 6 C 66 6, 68 8, 67 12 L 64 22 C 63 24, 61 25, 57 25 L 34 25 C 28 25, 26 27, 26 31 L 26 36 C 26 40, 28 42, 34 42 L 48 42 C 51 42, 53 44, 52 47 L 50 56 C 49 59, 47 60, 43 60 L 38 60 L 32 74 C 31 76, 29 77, 26 77 L 16 77 C 12 77, 10 74, 11 70 L 17 56 C 14 54, 12 50, 12 44 Z"
            fill="url(#brandGold)"
          />

          {/* 2. 중앙 골드 기둥 액센트 음영 */}
          <path
            d="M 40 42 L 52 42 L 43 74 C 42 76, 40 77, 37 77 L 27 77 L 37 45 C 38 43, 39 42, 40 42 Z"
            fill="#D97706"
            opacity="0.95"
          />

          {/* 3. 우측 실버 그레이 상단 날개 (#A7B0C0) */}
          <path
            d="M 72 6 L 94 6 C 97 6, 99 9, 97 13 L 94 21 C 93 24, 90 25, 87 25 L 67 25 C 65 25, 64 23, 65 21 L 70 8 C 70 7, 71 6, 72 6 Z"
            fill="url(#brandSilver)"
          />

          {/* 4. 우측 실버 그레이 하단 날개 (#A7B0C0) */}
          <path
            d="M 58 35 L 83 35 C 86 35, 88 37, 86 41 L 83 49 C 82 52, 79 53, 76 53 L 52 53 C 50 53, 49 51, 50 48 L 55 37 C 56 35, 57 35, 58 35 Z"
            fill="url(#brandSilver)"
          />

          {/* 5. 우측 실버 수직 연결 지지대 */}
          <path
            d="M 57 35 L 65 35 L 53 74 C 52 76, 50 77, 47 77 L 39 77 L 53 37 C 54 35, 56 35, 57 35 Z"
            fill="#64748B"
          />
        </svg>
      </div>

      {/* 워드마크 + 서브 슬로건 (공식 타이포그래피) */}
      <div className="flex flex-col text-left">
        <div className={`font-black tracking-tight ${currentSize.textSize} ${textColor} leading-none flex items-center`}>
          <span>GenTrophy</span>
          <span className="text-[#F4C430] ml-0.5">OS</span>
        </div>
        {showSlogan && (
          <span
            className={`font-medium tracking-wide ${currentSize.sloganSize} ${sloganColor} mt-1 leading-none`}
            style={{ letterSpacing: "0.08em" }}
          >
            Your Sports Event Partner
          </span>
        )}
      </div>
    </Link>
  );
}
