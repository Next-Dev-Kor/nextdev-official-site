// app/(public)/recruit/page.tsx
import Link from "next/link";
import RecruitAPIs from "@/lib/apis/recruit";
import { RecruitPost } from "@prisma/client";

const RecruitPage = async () => {
  const posts: RecruitPost[] = await RecruitAPIs.getPosts();

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
        <div className="text-center text-muted-foreground">
          현재 진행 중인 모집이 없습니다.
        </div>
      )}
    </div>
  );
};

export default RecruitPage;
