import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/apiClient';

type Props = {
  search?: string;
  page?: number;
  limit?: number;
};

export function useGetJobs({ search, page, limit }: Props) {
  const query = `page=${page}&limit=${limit}&name=${search}`;
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['jobs', search, page, limit],
    queryFn: async () => (await apiClient(`/jobs?${query}`)).data,
    staleTime: Infinity
  });
  return { data, isLoading, isSuccess };
}
