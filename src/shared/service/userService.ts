/* eslint-disable react-hooks/rules-of-hooks */

import { useQuery } from '@tanstack/react-query';

import { useUserDao } from '../dao/userDao';
import type { IUser } from '../interfaces/IUser';

export const useUserService = () => {
  const { fetchUsers: fetchUsersDao, fetchSingleUser: fetchSingleUserDao } = useUserDao();

  const fetchUsers = (start: number, query?: string) => {
    return useQuery<IUser[], Error>({
      queryKey: ['users', start, query],
      queryFn: () => fetchUsersDao(start, query)
    });
  };

  const fetchSingleUser = (id: string) => {
    return useQuery<IUser, Error>({
      queryKey: ['single_user', id],
      queryFn: () => fetchSingleUserDao(id)
    });
  };

  return {
    fetchUsers,
    fetchSingleUser
  };
};
