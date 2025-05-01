import { Skeleton } from "@/components/ui/skeleton";
import { Activity } from "@/app/(route)/blog/types";
import ActivityCard from "@/app/(route)/blog/_components/activity-card";

interface ActivitiesProps {
  activities?: Activity[];
  loading: boolean;
}

const Activities = ({ activities = [], loading }: ActivitiesProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {loading
        ? Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-[100px]" />
          ))
        : activities.map((activity) => (
            <ActivityCard key={activity.id} {...activity} />
          ))}
    </div>
  );
};

export default Activities;
