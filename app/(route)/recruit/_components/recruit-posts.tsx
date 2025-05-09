import Link from "next/link";
import { Position, RecruitPost } from "@prisma/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PositionBadge from "@/components/common/position-badge";
import { formatPeriod } from "@/utils/day";

interface RecruitPostsProps {
  posts: (RecruitPost & { position: Position })[];
}

const RecruitPostCard = ({
  post,
}: {
  post: RecruitPost & { position: Position };
}) => {
  return (
    <Link
      href={`/recruit/${post.id}`}
      className="border p-4 rounded-xl hover:bg-accent/50 transition-colors"
    >
      <div className="flex gap-2 items-center py-2">
        <PositionBadge position={post.position} />
        <div className="font-semibold text-base sm:text-lg">{post.title}</div>
      </div>
      <div className="text-xs text-gray-500 mb-1">
        {formatPeriod(post.startDate, post.endDate)}
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mt-1">
        {post.description}
      </p>
    </Link>
  );
};

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
            <RecruitPostCard key={post.id} post={post} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="frontend" className="mt-6">
        <div className="grid gap-4 sm:gap-6">
          {posts
            .filter((post) => post.position === "FRONTEND")
            .map((post) => (
              <RecruitPostCard key={post.id} post={post} />
            ))}
        </div>
      </TabsContent>
      <TabsContent value="backend" className="mt-6">
        <div className="grid gap-4 sm:gap-6">
          {posts
            .filter((post) => post.position === "BACKEND")
            .map((post) => (
              <RecruitPostCard key={post.id} post={post} />
            ))}
        </div>
      </TabsContent>
      <TabsContent value="designer" className="mt-6">
        <div className="grid gap-4 sm:gap-6">
          {posts
            .filter((post) => post.position === "DESIGNER")
            .map((post) => (
              <RecruitPostCard key={post.id} post={post} />
            ))}
        </div>
      </TabsContent>
      <TabsContent value="planner" className="mt-6">
        <div className="grid gap-4 sm:gap-6">
          {posts
            .filter((post) => post.position === "PLANNER")
            .map((post) => (
              <RecruitPostCard key={post.id} post={post} />
            ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default RecruitPosts;
