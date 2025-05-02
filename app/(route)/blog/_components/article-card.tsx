import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Article } from "@/app/(route)/blog/types";
import { Skeleton } from "@/components/ui/skeleton";

const ArticleCard = ({
  title,
  description,
  generation,
  type,
  tags,
}: Article) => {
  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[240px] p-6 order-2 md:order-1">
          <Skeleton className="w-full h-[160px]" />
        </div>
        <div className="flex-1 p-6 order-1 md:order-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline">{type}</Badge>
              <span className="text-sm text-muted-foreground">
                {generation}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;
