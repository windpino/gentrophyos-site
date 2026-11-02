import { NextResponse } from "next/server";
import { submitInquiry, InquiryData } from "@/lib/inquiries";

export async function POST(request: Request) {
  try {
    const body: InquiryData = await request.json();

    if (!body.orgName || !body.eventName || !body.name || !body.phone || !body.email) {
      return NextResponse.json(
        { success: false, error: "필수 입력 항목이 누락되었습니다." },
        { status: 400 }
      );
    }

    const result = await submitInquiry(body);

    if (result.success) {
      return NextResponse.json({
        success: true,
        id: result.id,
        isSimulated: result.isSimulated,
        message: "도입 문의가 성공적으로 데이터베이스에 저장되었습니다.",
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error || "데이터베이스 저장에 실패했습니다." },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error("API /api/inquiries error:", error);
    return NextResponse.json(
      { success: false, error: "서버 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
