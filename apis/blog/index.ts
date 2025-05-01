import axios from "axios";
import { ArticlesResponse, ActivitiesResponse } from "@/app/(route)/blog/types";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";

const getArticles = async (): Promise<ArticlesResponse> => {
  const response = await axios.get(`${baseURL}/api/blog/article`);
  return response.data;
};

const getActivities = async (): Promise<ActivitiesResponse> => {
  const response = await axios.get(`${baseURL}/api/blog/activity`);
  return response.data;
};

const BlogAPIs = {
  getArticles,
  getActivities,
};

export default BlogAPIs;
