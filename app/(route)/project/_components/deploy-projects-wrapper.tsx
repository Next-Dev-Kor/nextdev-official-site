"use client";

import { DeployProjectResponse } from "@/app/(route)/project/types";
import DeployProjects from "@/app/(route)/project/_components/deploy-projects";

interface DeployProjectsWrapperProps {
  initialData: DeployProjectResponse;
}

const DeployProjectsWrapper = ({ initialData }: DeployProjectsWrapperProps) => {
  return <DeployProjects initialData={initialData} />;
};

export default DeployProjectsWrapper;
