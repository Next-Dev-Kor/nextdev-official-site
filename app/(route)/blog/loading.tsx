import { Skeleton } from "@/components/ui/skeleton";

const BlogLoading = () => {
  return (
    <div className="py-24 md:px-8 lg:px-[25%]">
      <div className="w-full max-w-[400px] mx-auto md:mx-0 flex justify-center gap-4 mb-8">
        <Skeleton className="h-10 w-[100px]" />
        <Skeleton className="h-10 w-[100px]" />
      </div>
      <div className="py-5 px-4 md:px-0">
        <Skeleton className="h-20 w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-[200px]" />
        ))}
      </div>
    </div>
  );
};

export default BlogLoading;
