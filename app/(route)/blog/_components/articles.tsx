import { Article } from "@/app/(route)/blog/types";
import { Skeleton } from "@/components/ui/skeleton";
import ArticleCard from "@/app/(route)/blog/_components/article-card";

interface ArticlesProps {
  articles?: Article[];
  loading: boolean;
}

const Articles = ({ articles = [], loading }: ArticlesProps) => {
  return (
    <div className="flex flex-col gap-4">
      {loading
        ? Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-[100px]" />
          ))
        : articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
    </div>
  );
};

export default Articles;
