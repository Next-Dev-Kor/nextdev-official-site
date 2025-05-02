import { withCors } from "@/app/lib/cors";
import prisma from "@/lib/db";

export async function GET() {
  const now = new Date();

  const posts = await prisma.recruitPost.findMany({
    where: {
      startDate: { lte: now },
      endDate: { gte: now },
    },
    orderBy: { createdAt: "desc" },
  });

  return withCors(posts);
}
