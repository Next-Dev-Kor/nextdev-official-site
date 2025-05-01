import { RecentDeployProjectResponse } from "@/app/(route)/project/types";
import RecentDeployCard from "@/app/(route)/project/_components/recent-deploy-card";

interface RecentDeployProjectsProps {
  data: RecentDeployProjectResponse;
}

const RecentDeployProjects = ({ data }: RecentDeployProjectsProps) => {
  return <RecentDeployCard data={data} />;
};

export default RecentDeployProjects;
