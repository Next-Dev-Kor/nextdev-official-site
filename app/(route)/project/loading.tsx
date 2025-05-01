import { Skeleton } from "@/components/ui/skeleton";

const ProjectLoading = () => {
  return (
    <div className="py-24 flex flex-col gap-10 sm:px-4 md:px-8 lg:px-[25%] px-3">
      <div className="flex flex-col gap-4">
        <Skeleton className="h-8 w-[200px]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-[124px]" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="h-8 w-[200px]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-[124px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLoading;
