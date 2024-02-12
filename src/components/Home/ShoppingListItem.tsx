import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { ShoppingListData } from '@/shared/interfaces/IShopping';

interface Props {
  item: ShoppingListData;
}

const ShoppingListItem = ({ item }: Props) => {
  return (
    <Link href={`/lists/edit/${item.list_id}`}>
      <figure className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <Image
            src={item.list_img}
            alt={item.list_name}
            className="aspect-[3/4] size-fit object-cover"
            width={200}
            height={300}
            priority
          />
        </div>
        <figcaption className="cursor-pointer pt-2 text-center text-base hover:underline md:text-start">
          <span className="primary-blue font-semibold">{item.list_name}</span>
        </figcaption>
      </figure>
    </Link>
  );
};

export default ShoppingListItem;
