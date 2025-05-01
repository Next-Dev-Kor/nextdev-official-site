import BlogAPIs from "@/apis/blog";

export const articleOptions = {
  queryKey: ["article"] as const,
  queryFn: BlogAPIs.getArticles,
} as const;

export const activityOptions = {
  queryKey: ["activity"] as const,
  queryFn: BlogAPIs.getActivities,
} as const;

export async function getArticles() {
  const res = await fetch("http://localhost:3000/api/blog/article");
  return res.json();
}

export async function getActivities() {
  const res = await fetch("http://localhost:3000/api/blog/activity");
  return res.json();
}
