'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ShoppingList from '@/components/Home/ShoppingList';

const CreateList = () => {
  return (
    <section className="container min-h-screen">
      <DndProvider backend={HTML5Backend}>
        <div className="flex items-center justify-center">
          <ShoppingList />
        </div>
      </DndProvider>
    </section>
  );
};

export default CreateList;
