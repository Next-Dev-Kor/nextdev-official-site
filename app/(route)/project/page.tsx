import { Suspense } from "react";
import RecentDeployProjects from "@/app/(route)/project/_components/recent-deploy-projects";
import DeployProjects from "@/app/(route)/project/_components/deploy-projects";
import ProjectAPIs from "@/apis/project";
import ProjectLoading from "./loading";

const ProjectPage = async () => {
  const [recentDeployData, deployCardsData] = await Promise.all([
    ProjectAPIs.getRecentDeployProject(),
    ProjectAPIs.getDeployCards(),
  ]);

  return (
    <div className="py-24 flex flex-col gap-10 sm:px-4 md:px-8 lg:px-[25%] px-3">
      <Suspense fallback={<ProjectLoading />}>
        <RecentDeployProjects data={recentDeployData} />
        <DeployProjects initialData={deployCardsData} />
      </Suspense>
    </div>
  );
};

export default ProjectPage;
