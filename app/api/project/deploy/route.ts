import { appJamProjects } from "@/app/data/appjam";
import { withCors } from "@/app/lib/cors";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type") as "APP" | "WEB" | "ALL" | null;

  let filteredProjects = appJamProjects;
  if (type && type !== "ALL") {
    filteredProjects = appJamProjects.filter(
      (project) => project.type === type
    );
  }

  return withCors({
    projects: filteredProjects,
  });
}
