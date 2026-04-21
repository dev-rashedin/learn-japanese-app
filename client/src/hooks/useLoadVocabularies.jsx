import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useLoadVocabularies = (filter) => {

  const axiosSecure = useAxiosSecure();

  const {
    data: vocabularies = [],
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['vocabularies', filter],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/vocabularies?filter=${filter}`
      );
      return res.data;
    },
    onError: (error) => {
      console.error('Error fetching vocabularies:', error);
    },
  });

  return [vocabularies, refetch, isLoading, isError, error];
};

export default useLoadVocabularies;
