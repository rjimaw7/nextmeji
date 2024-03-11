/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';

import { useUserDao } from '../dao/userDao';
import type { IUser } from '../interfaces/IUser';

export const useUserService = () => {
  const { fetchUsers: fetchUsersDao } = useUserDao();

  const fetchUsers = (start: number) => {
    return useQuery<IUser[], Error>({
      queryKey: ['users', start],
      queryFn: () => fetchUsersDao(start)
    });
  };

  return {
    fetchUsers
  };
};
