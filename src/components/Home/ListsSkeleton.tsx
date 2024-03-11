import React from 'react';

import { Skeleton } from '../ui/skeleton';

const ListsSkeleton = () => {
  return (
    <div className="">
      <div className="flex size-full items-start justify-start gap-2">
        <Skeleton className="size-32 rounded-xl bg-gray-400" />

        <div className="flex size-full justify-between gap-4">
          <div className="flex size-full flex-col items-start justify-between">
            <div className="flex w-full flex-col gap-2">
              <Skeleton className="h-4 w-[250px] bg-gray-400" />
              <Skeleton className="h-4 w-[250px] bg-gray-400" />
            </div>
            <Skeleton className="h-4 w-[250px] bg-gray-400" />
          </div>
          <div className="flex size-full cursor-pointer flex-col gap-4">
            <Skeleton className="h-4 w-[250px] bg-gray-400" />
            <Skeleton className="h-4 w-[250px] bg-gray-400" />
            <Skeleton className="h-4 w-[250px] bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListsSkeleton;
