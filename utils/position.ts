import { Position } from "@prisma/client";

export const getPositionImage = (position: Position) => {
  switch (position) {
    case "BACKEND":
      return "/backend.png";
    case "FRONTEND":
      return "/frontend.png";
    case "PLANNER":
      return "/planner.png";
    case "DESIGNER":
      return "/designer.png";
    default:
      return "/backend.png";
  }
};
