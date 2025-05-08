import Link from "next/link";
import { Position, RecruitPost } from "@prisma/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RecruitPostsProps {
  posts: (RecruitPost & { position: Position })[];
}

const PositionBadge = ({ position }: { position: Position }) => {
  const getPositionVariant = (position: Position) => {
    switch (position) {
      case "BACKEND":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "FRONTEND":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "PLANNER":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100";
      case "DESIGNER":
        return "bg-pink-100 text-pink-800 hover:bg-pink-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <Badge
      variant="outline"
      className={cn("border-none", getPositionVariant(position))}
    >
      {position === "BACKEND" && "백엔드"}
      {position === "FRONTEND" && "프론트엔드"}
      {position === "PLANNER" && "기획자"}
      {position === "DESIGNER" && "디자이너"}
    </Badge>
  );
};

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
