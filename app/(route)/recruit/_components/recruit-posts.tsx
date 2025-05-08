import Link from "next/link";
import { RecruitPost } from "@prisma/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RecruitPostsProps {
  posts: (RecruitPost & { position: string })[];
}

const RecruitPosts = ({ posts }: RecruitPostsProps) => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="all">전체</TabsTrigger>
        <TabsTrigger value="frontend">프론트엔드</TabsTrigger>
        <TabsTrigger value="backend">백엔드</TabsTrigger>
        <TabsTrigger value="designer">디자이너</TabsTrigger>
        <TabsTrigger value="planner">기획자</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-6">
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
      </TabsContent>
      <TabsContent value="frontend" className="mt-6">
        <div className="grid gap-4 sm:gap-6">
          {posts
            .filter((post) => post.position === "FRONTEND")
            .map((post) => (
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
      </TabsContent>
      <TabsContent value="backend" className="mt-6">
        <div className="grid gap-4 sm:gap-6">
          {posts
            .filter((post) => post.position === "BACKEND")
            .map((post) => (
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
      </TabsContent>
      <TabsContent value="designer" className="mt-6">
        <div className="grid gap-4 sm:gap-6">
          {posts
            .filter((post) => post.position === "DESIGNER")
            .map((post) => (
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
      </TabsContent>
      <TabsContent value="planner" className="mt-6">
        <div className="grid gap-4 sm:gap-6">
          {posts
            .filter((post) => post.position === "PLANNER")
            .map((post) => (
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
      </TabsContent>
    </Tabs>
  );
};

export default RecruitPosts;
