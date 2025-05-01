import { Skeleton } from "@/components/ui/skeleton";
import RecentDeployCard from "@/app/(route)/project/_components/recent-deploy-card";
import { RecentDeployProjectResponse } from "@/app/(route)/project/types";

interface RecentDeployProjectsProps {
  data: RecentDeployProjectResponse;
  loading: boolean;
}
const RecentDeployProjects = ({ data, loading }: RecentDeployProjectsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {loading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <Skeleton
            key={index}
            className="w-full h-[124px] bg-gray-200 animate-pulse"
          />
        ))
      ) : (
        <RecentDeployCard data={data} />
      )}
    </div>
  );
};

export default RecentDeployProjects;
