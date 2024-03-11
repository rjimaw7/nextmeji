/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */

'use client';

import { useDebounce } from '@uidotdev/usehooks';
import React, { useMemo, useState } from 'react';

import type { IUser } from '@/shared/interfaces/IUser';
import { useUserService } from '@/shared/service/userService';
import useGlobalStore from '@/shared/zustand/globalStore';

import List from './List';
import ListsSkeleton from './ListsSkeleton';
import PaginationArrows from './PaginationArrows';

const Lists = () => {
  const [start, setStart] = useState(0);
  const { fetchUsers } = useUserService();
  const { searchQuery } = useGlobalStore();
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { data: usersData, isLoading: usersDataLoading } = fetchUsers(start, debouncedSearchQuery);

  const usersDataMemo = useMemo(() => usersData, [usersData]);

  return (
    <div>
      {usersDataLoading ? (
        <div className="my-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <ListsSkeleton key={index} />
          ))}
        </div>
      ) : usersDataMemo && usersDataMemo.length > 0 ? (
        <div className="my-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {usersDataMemo.map((item: IUser) => (
            <List key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl font-bold">No Users Found</p>
      )}

      <PaginationArrows start={start} setStart={setStart} usersDataLoading={usersDataLoading} />
    </div>
  );
};

export default Lists;
