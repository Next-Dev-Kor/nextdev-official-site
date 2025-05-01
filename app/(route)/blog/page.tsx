"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useBlogStore } from "@/app/(route)/blog/store";
import { articleOptions, activityOptions } from "@/app/(route)/blog/options";
import { useSuspenseQuery } from "@tanstack/react-query";
import Activities from "@/app/(route)/blog/_components/activities";
import Articles from "@/app/(route)/blog/_components/articles";
import { ActivitiesResponse, ArticlesResponse } from "@/app/(route)/blog/types";

const BlogPage = () => {
  const { activeTab, setActiveTab } = useBlogStore();
  const { data: articleData, isLoading: articleLoading } =
    useSuspenseQuery<ArticlesResponse>(articleOptions);
  const { data: activityData, isLoading: activitiesLoading } =
    useSuspenseQuery<ActivitiesResponse>(activityOptions);

  return (
    <div className="py-24 md:px-8 lg:px-[25%]">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "activity" | "article")}
        className="w-full"
      >
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
            {activeTab === "activity"
              ? "회원들의 진솔한 후기를 통해 NextDev를 미리 만나보세요."
              : "회원들의 아티클을 통해 NextDev에서 얻은 인사이트를 확인해보세요."}
          </div>
        </div>

        <TabsContent value="activity" className="w-full mt-0 px-4 md:px-0">
          <Activities
            activities={activityData?.activities || []}
            loading={activitiesLoading}
          />
        </TabsContent>
        <TabsContent value="article" className="w-full mt-0 px-4 md:px-0">
          <Articles
            articles={articleData?.articles || []}
            loading={articleLoading}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BlogPage;
