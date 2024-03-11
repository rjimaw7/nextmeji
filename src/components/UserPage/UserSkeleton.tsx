import React from 'react';

import { Skeleton } from '../ui/skeleton';

const UserSkeleton = () => {
  return (
    <div>
      <Skeleton className="hidden h-4 w-[250px] bg-gray-400 md:flex" />
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-0">
        <Skeleton className="mx-auto size-32 rounded-xl bg-gray-400" />
        <form className="w-full space-y-4 px-2 md:px-5">
          <div className="grid w-full grid-cols-1 items-center gap-12 md:px-3 lg:grid-cols-2">
            <Skeleton className="h-8 w-full bg-gray-400 lg:w-[350px]" />
            <Skeleton className="h-8 w-full bg-gray-400 lg:w-[350px]" />
            <Skeleton className="h-8 w-full bg-gray-400 lg:w-[350px]" />
            <Skeleton className="h-8 w-full bg-gray-400 lg:w-[350px]" />
            <Skeleton className="h-8 w-full bg-gray-400 lg:w-[350px]" />
            <Skeleton className="h-8 w-full bg-gray-400 lg:w-[350px]" />
            <Skeleton className="h-8 w-full bg-gray-400 lg:w-[350px]" />
            <Skeleton className="h-8 w-full bg-gray-400 lg:w-[350px]" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSkeleton;
