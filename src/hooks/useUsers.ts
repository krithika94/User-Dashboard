import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../utils/api';
import { User } from '../types';

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,     
  });
};