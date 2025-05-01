import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity } from "@/app/(route)/blog/types";

const ActivityCard = ({
  category,
  title,
  description,
  generation,
  type,
}: Activity) => {
  return (
    <Card>
      <div className="flex">
        <div className="flex-1 p-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{category}</Badge>
              <Badge variant="secondary">{type}</Badge>
              <span className="text-sm text-muted-foreground">
                {generation}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="w-[240px] p-6">
          <div className="w-full h-[160px] bg-muted rounded-lg" />
        </div>
      </div>
    </Card>
  );
};

export default ActivityCard;
