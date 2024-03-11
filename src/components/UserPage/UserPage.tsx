'use client';

import React, { useMemo } from 'react';

import { useUserService } from '@/shared/service/userService';

import User from './User';

interface Props {
  id: string;
}

const UserPage = ({ id }: Props) => {
  const { fetchSingleUser } = useUserService();

  const { data: singleData, isLoading: singleDataLoading } = fetchSingleUser(id);

  const singleDataMemo = useMemo(() => singleData, [singleData]);

  return (
    <section id="specificUserDetails" className="container mx-auto my-8 bg-white py-4">
      {singleDataLoading ? <p>Loading...</p> : <User singleDataMemo={singleDataMemo} id={id} />}
    </section>
  );
};

export default UserPage;
