import { withCors } from "@/app/lib/cors";
import prisma from "@/lib/db";

export async function GET() {
  const posts = await prisma.recruitPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return withCors(posts);
}
