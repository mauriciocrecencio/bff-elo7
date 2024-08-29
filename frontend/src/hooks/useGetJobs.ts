import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/apiClient';

type Props = {
  search?: string;
  page?: number;
  limit?: number;
};

export function useGetJobs({ search, page = 1, limit = 10 }: Props) {
  const query = `page=${page}&limit=${limit}&search=${search}`;

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['jobs', search, page, limit],
    queryFn: async () => (await apiClient(`/jobs?${query}`)).data,
    staleTime: Infinity
  });
  return { data, isLoading, isSuccess, isError };
}
