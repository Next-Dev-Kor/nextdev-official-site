import ProjectAPIs from "@/apis/project";
import { DeployProjectResponse } from "@/features/project/types";

export const recentDeployProjectOptions = {
  queryKey: ["recent-deploy-project"] as const,
  queryFn: ProjectAPIs.getRecentDeployProject,
} as const;

export const deployCardsOptions = (type?: "APP" | "WEB" | "ALL") =>
  ({
    queryKey: ["deploy-cards"],
    queryFn: ProjectAPIs.getDeployCards,
    select: (data: DeployProjectResponse) => {
      if (!type || type === "ALL") {
        return data;
      }
      return {
        ...data,
        projects: data.projects.filter((project) => project.type === type),
      };
    },
  }) as const;
