"use client";

import RecentDeployProjects from "@/app/(route)/project/_components/recent-deploy-projects";
import {
  recentDeployProjectOptions,
  deployCardsOptions,
} from "@/app/(route)/project/options";
import { useSuspenseQuery } from "@tanstack/react-query";
import DeployProjects from "@/app/(route)/project/_components/deploy-projects";
import { useState } from "react";

const ProjectPage = () => {
  const [selectedType, setSelectedType] = useState<"APP" | "WEB" | "ALL">(
    "ALL"
  );

  const recentDeployQuery = useSuspenseQuery(recentDeployProjectOptions);
  const deployCardsQuery = useSuspenseQuery(deployCardsOptions(selectedType));

  return (
    <div className="py-24 flex flex-col gap-10 sm:px-4 md:px-8 lg:px-[25%] px-3">
      <RecentDeployProjects
        data={recentDeployQuery.data}
        loading={recentDeployQuery.isLoading}
      />
      <DeployProjects
        data={deployCardsQuery.data}
        loading={deployCardsQuery.isLoading}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />
    </div>
  );
};

export default ProjectPage;
