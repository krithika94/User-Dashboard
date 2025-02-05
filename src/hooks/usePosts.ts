import { useQuery } from '@tanstack/react-query';
import { fetchPostsByUser } from '../utils/api';
import { Post } from '../types';

export const usePosts = (userId: number) => {
  return useQuery<Post[], Error>({
    queryKey: ['posts', userId],
    queryFn: () => fetchPostsByUser(userId),
    enabled: !!userId, // Only fetch posts if userId is provided
    staleTime: 1000 * 60 * 5, 
  });
};