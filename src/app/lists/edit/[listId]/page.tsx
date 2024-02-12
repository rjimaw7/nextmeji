'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ShoppingList from '@/components/Home/ShoppingList';
import useShoppingListStorage from '@/shared/hooks/useShoppingListStorage';
import type { ShoppingListData } from '@/shared/interfaces/IShopping';

const EditList = () => {
  const { shoppingListsData } = useShoppingListStorage();
  const params = useParams<{ listId: string }>();

  const paramsList: ShoppingListData = shoppingListsData.find((list) => list.list_id === params.listId)!;

  return (
    <section className="container min-h-screen">
      <DndProvider backend={HTML5Backend}>
        <div className="flex items-center justify-center">
          <ShoppingList paramsListData={paramsList} />
        </div>
      </DndProvider>
    </section>
  );
};

export default EditList;
