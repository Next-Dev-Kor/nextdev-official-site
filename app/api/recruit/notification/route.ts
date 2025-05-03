import { NextRequest, NextResponse } from "next/server";
import { withCors } from "@/app/lib/cors";
import prisma from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { email, userId } = await request.json();

    console.log(email, userId, "<<<<<");

    if (!email || !userId) {
      return NextResponse.json(
        { error: "이메일과 사용자 ID가 필요합니다." },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "사용자를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { email },
    });

    return withCors({ success: true, user: updatedUser });
  } catch (error) {
    console.error("이메일 알림 등록 중 오류 발생:", error);
    return NextResponse.json(
      { error: "이메일 알림 등록에 실패했습니다." },
      { status: 500 }
    );
  }
}
