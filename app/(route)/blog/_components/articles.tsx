"use client";

import { Article } from "@/app/(route)/blog/types";
import ArticleCard from "@/app/(route)/blog/_components/article-card";

interface ArticlesProps {
  articles: Article[];
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Articles;
