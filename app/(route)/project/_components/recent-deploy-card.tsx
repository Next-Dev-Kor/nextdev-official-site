import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  RecentDeployProject,
  RecentDeployProjectResponse,
} from "@/app/(route)/project/types";

const RecentDeployCards = ({ data }: { data: RecentDeployProjectResponse }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-foreground text-xl font-semibold">
        최근 배포 프로젝트
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.projects?.map((item: RecentDeployProject) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentDeployCards;
