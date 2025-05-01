export interface RecentDeployProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  users: number;
}

export interface RecentDeployProjectResponse {
  projects: RecentDeployProject[];
}

export interface DeployProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: "APP" | "WEB";
  totalProjects?: number;
}

export interface DeployProjectResponse {
  projects: DeployProject[];
}
