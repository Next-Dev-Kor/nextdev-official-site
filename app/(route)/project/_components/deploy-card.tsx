import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { DeployProject } from "@/app/(route)/project/types";

const DeployCard = ({ data }: { data: DeployProject[] }) => {
  return (
    <>
      {data.map((item) => (
        <Card key={item.id}>
          <div className="flex items-center justify-center">
            <Skeleton className="w-[90%] h-[160px]" />
          </div>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default DeployCard;
