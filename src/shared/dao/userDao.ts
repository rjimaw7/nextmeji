import { useAxios } from '../hooks/useAxios';
import type { IUser } from '../interfaces/IUser';

export const useUserDao = () => {
  const { GET } = useAxios();

  const fetchUsers = async (start: number) => {
    const response = await GET<IUser[]>({
      url: `/users?_start=${start}&_limit=5`
    });

    return response.data;
  };

  const fetchSingleUser = async (id: string) => {
    const response = await GET<IUser>({
      url: `/users/${id}`
    });

    return response.data;
  };

  return {
    fetchUsers,
    fetchSingleUser
  };
};
