import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/apiClient';

export function useGetJobs() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => await apiClient(`/jobs`),
    staleTime: Infinity
  });
  return { data, isLoading, isSuccess };
}
