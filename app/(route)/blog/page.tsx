import { Suspense } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Activities from "@/app/(route)/blog/_components/activities";
import Articles from "@/app/(route)/blog/_components/articles";
import BlogAPIs from "@/apis/blog";
import BlogLoading from "@/app/(route)/blog/loading";

const BlogPage = async () => {
  const [articleData, activityData] = await Promise.all([
    BlogAPIs.getArticles(),
    BlogAPIs.getActivities(),
  ]);

  return (
    <div className="py-24 md:px-8 lg:px-[25%]">
      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="w-full max-w-[400px] mx-auto md:mx-0 flex justify-center">
          <TabsTrigger value="activity" className="w-full px-5">
            활동후기
          </TabsTrigger>
          <TabsTrigger value="article" className="w-full px-5">
            아티클
          </TabsTrigger>
        </TabsList>

        <div className="py-5 px-4 md:px-0">
          <div className="text-foreground py-5 px-4 md:px-0 bg-card md:bg-transparent rounded-lg w-full text-center sm:text-left">
            활동후기 탭에서는 회원들의 진솔한 후기를 통해 NextDev를 미리
            만나보실 수 있습니다. 아티클 탭에서는 회원들의 아티클을 통해
            NextDev에서 얻은 인사이트를 확인하실 수 있습니다.
          </div>
        </div>

        <Suspense fallback={<BlogLoading />}>
          <TabsContent value="activity" className="w-full mt-0 px-4 md:px-0">
            <Activities activities={activityData?.activities || []} />
          </TabsContent>
          <TabsContent value="article" className="w-full mt-0 px-4 md:px-0">
            <Articles articles={articleData?.articles || []} />
          </TabsContent>
        </Suspense>
      </Tabs>
    </div>
  );
};

export default BlogPage;
