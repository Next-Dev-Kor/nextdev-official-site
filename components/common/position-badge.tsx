import { Position } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const getPositionVariant = (position: Position) => {
  switch (position) {
    case "BACKEND":
      return "bg-blue-100 text-blue-800 hover:bg-blue-100";
    case "FRONTEND":
      return "bg-green-100 text-green-800 hover:bg-green-100";
    case "PLANNER":
      return "bg-purple-100 text-purple-800 hover:bg-purple-100";
    case "DESIGNER":
      return "bg-pink-100 text-pink-800 hover:bg-pink-100";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100";
  }
};

const PositionBadge = ({ position }: { position: Position }) => {
  return (
    <Badge
      variant="outline"
      className={cn("border-none", getPositionVariant(position))}
    >
      {position === "BACKEND" && "백엔드"}
      {position === "FRONTEND" && "프론트엔드"}
      {position === "PLANNER" && "기획자"}
      {position === "DESIGNER" && "디자이너"}
    </Badge>
  );
};

export default PositionBadge;
