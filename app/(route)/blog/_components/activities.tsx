import { Activity } from "@/app/(route)/blog/types";
import ActivityCard from "@/app/(route)/blog/_components/activity-card";

interface ActivitiesProps {
  activities: Activity[];
}

const Activities = ({ activities }: ActivitiesProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} {...activity} />
      ))}
    </div>
  );
};

export default Activities;
