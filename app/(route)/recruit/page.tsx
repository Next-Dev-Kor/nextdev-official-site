// app/(public)/recruit/page.tsx
import Link from "next/link";
import RecruitAPIs from "@/lib/apis/recruit";
import { RecruitPost } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EmailForm from "@/app/(route)/recruit/_components/email-form";

const RecruitPage = async () => {
  const posts: RecruitPost[] = await RecruitAPIs.getPosts();

  const session = await getServerSession(authOptions);
  const userId = session?.user?.id ? Number(session.user.id) : null;

  return (
    <div className="py-24 flex flex-col gap-10 sm:px-4 md:px-8 lg:px-[25%] px-3">
      <div className="w-full max-w-2xl mx-auto mb-8">
        <EmailForm userId={userId} />
      </div>
      <div className="grid gap-4 sm:gap-6">
        {posts.map((post) => (
          <Link
            href={`/recruit/${post.id}`}
            key={post.id}
            className="border p-4 rounded-xl hover:bg-accent/50 transition-colors"
          >
            <div className="font-semibold text-base sm:text-lg">
              {post.title}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mt-1">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecruitPage;
