import AboutAPIs from "@/apis/about";
import { useQuery } from "@tanstack/react-query";

export const CoreValue = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["coreValue"],
    queryFn: AboutAPIs.fetchCoreValue,
  });
  return { data, isLoading, isError, refetch };
};

export const CurriCulum = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["curriCulum"],
    queryFn: AboutAPIs.fetchCurriCulum,
  });
  return { data, isLoading, isError, refetch };
};

export const Executives = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["executives"],
    queryFn: AboutAPIs.fetchExecutives,
  });
  return { data, isLoading, isError, refetch };
};

export const ActivityRecords = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["activityRecords"],
    queryFn: AboutAPIs.fetchActivityRecords,
  });
  return { data, isLoading, isError, refetch };
};

export default ActivityRecords;
