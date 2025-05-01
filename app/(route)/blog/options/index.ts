import BlogAPIs from "@/apis/blog";

export const articleOptions = {
  queryKey: ["article"] as const,
  queryFn: BlogAPIs.getArticles,
} as const;

export const activityOptions = {
  queryKey: ["activity"] as const,
  queryFn: BlogAPIs.getActivities,
} as const;
