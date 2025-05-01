import axios from "axios";
import {
  RecentDeployProjectResponse,
  DeployProjectResponse,
} from "@/app/(route)/project/types";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";

const getRecentDeployProject =
  async (): Promise<RecentDeployProjectResponse> => {
    const response = await axios.get(`${baseURL}/api/project/recent`);
    return response.data;
  };

const getDeployCards = async (): Promise<DeployProjectResponse> => {
  const response = await axios.get(`${baseURL}/api/project/deploy`);
  return response.data;
};

const ProjectAPIs = {
  getRecentDeployProject,
  getDeployCards,
};

export default ProjectAPIs;
