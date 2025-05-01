export interface Article {
  id: number;
  title: string;
  description: string;
  generation: string;
  type: string;
  thumbnailUrl: string;
  author: string;
  createdAt: string;
  tags: string[];
}

export interface Activity {
  id: number;
  category: string;
  title: string;
  description: string;
  generation: string;
  type: string;
  thumbnailUrl: string;
  author: string;
  createdAt: string;
}

export interface ArticlesResponse {
  articles: Article[];
}

export interface ActivitiesResponse {
  activities: Activity[];
}
