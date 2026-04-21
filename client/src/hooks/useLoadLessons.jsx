import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useLoadLessons = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: lessons = [],
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['lessons'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/lessons`);
      return res.data;
    },
    onError: (error) => {
      console.error('Error fetching vocabularies:', error);
    },
  });

  return [lessons, refetch, isLoading, isError, error];
};

export default useLoadLessons;
