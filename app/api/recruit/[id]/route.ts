import prisma from "@/lib/db";
import { NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

export async function GET(request: Request, props: { params: Params }) {
  try {
    const params = await props.params;
    const post = await prisma.recruitPost.findUnique({
      where: {
        id: parseInt(params.id),
      },
    });

    if (!post) {
      return NextResponse.json(
        { error: "채용 공고를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("채용 공고 조회 실패:", error);
    return NextResponse.json(
      { error: "채용 공고를 불러오는데 실패했습니다." },
      { status: 500 }
    );
  }
}
