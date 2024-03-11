import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { getInitials } from '@/lib/utils';
import type { IUser } from '@/shared/interfaces/IUser';

interface Props {
  item: IUser;
}

const List = ({ item }: Props) => {
  return (
    <div>
      <div className="flex size-full items-start justify-start gap-2">
        <p className="flex size-32 items-center justify-center bg-[#5172e9] text-4xl text-white">
          {getInitials(item.name)}
        </p>

        <div className="flex size-full justify-between gap-4">
          <div className="flex size-full flex-col items-start justify-between">
            <div className="flex w-full flex-col">
              <p className="flex items-center gap-1 text-xl font-bold">
                {item.name} <span className="text-xs font-normal">(@{item.username})</span>
              </p>
              <p className="text-xs text-[#5172e9]">{item.email}</p>
            </div>
            <p className="text-xs">Company: {item.company.name}</p>
          </div>
          <div className="flex size-full cursor-pointer flex-col gap-1">
            <p className="text-sm">Phone : {item.phone}</p>
            <p className="text-sm">
              Website: <span className="text-[#5172e9]">{item.website}</span>
            </p>
            <Link
              href={`/users/${item.id}`}
              className="flex w-1/2 items-center justify-between rounded-full border border-black px-2 py-1 hover:bg-gray-300"
            >
              <p className="text-sm">Details</p>
              <ChevronRight className="text-gray-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
