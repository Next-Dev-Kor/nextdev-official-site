import { NextRequest, NextResponse } from "next/server";
import { withCors } from "@/app/lib/cors";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id ? Number(session.user.id) : null;

    if (!userId) {
      return NextResponse.json(
        { error: "로그인이 필요합니다." },
        { status: 401 }
      );
    }

    const { email } = await request.json();
    if (!email) {
      return NextResponse.json(
        { error: "이메일이 필요합니다." },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { id: userId },
      data: { email },
    });

    const isAlreadyInWaitlist = await prisma.recruitWaitlist.findFirst({
      where: { userId },
    });

    if (!isAlreadyInWaitlist) {
      await prisma.recruitWaitlist.create({
        data: { userId },
      });
    }

    return withCors({ success: true });
  } catch (error) {
    console.error("대기 리스트 등록 중 오류:", error);
    return NextResponse.json(
      { error: "대기 리스트 등록에 실패했습니다." },
      { status: 500 }
    );
  }
}
