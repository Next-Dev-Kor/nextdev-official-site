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
    <div className="grid gap-6 p-5 py-24">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link
            href={`/recruit/${post.id}`}
            key={post.id}
            className="border p-4 rounded-xl"
          >
            <div className="font-semibold text-lg">{post.title}</div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {post.description}
            </p>
          </Link>
        ))
      ) : (
        <EmailForm userId={userId} />
      )}
    </div>
  );
};

export default RecruitPage;
