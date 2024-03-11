/* eslint-disable react/no-array-index-key */

'use client';

import React, { useMemo, useState } from 'react';

import { useUserService } from '@/shared/service/userService';

import List from './List';
import ListsSkeleton from './ListsSkeleton';
import PaginationArrows from './PaginationArrows';

const Lists = () => {
  const [start, setStart] = useState(0);
  const { fetchUsers } = useUserService();

  const { data: usersData, isLoading: usersDataLoading } = fetchUsers(start);

  const usersDataMemo = useMemo(() => usersData, [usersData]);

  return (
    <div>
      {usersDataLoading ? (
        <div className="my-6 grid grid-cols-2 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <ListsSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="my-6 grid grid-cols-2 gap-4">
          {usersDataMemo?.map((item) => <List key={item.id} item={item} />)}
        </div>
      )}
      {!usersDataLoading && <PaginationArrows start={start} setStart={setStart} />}
    </div>
  );
};

export default Lists;
