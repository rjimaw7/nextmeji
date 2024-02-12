/* eslint-disable react/no-array-index-key */

'use client';

import { Grip, Trash2 } from 'lucide-react';
import { useDrag, useDrop } from 'react-dnd';
import type { UseFieldArrayRemove } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';

interface Props {
  // item: ShoppingItem;
  reorderRow: (draggedRowIndex: number, targetRowIndex: number) => void;
  itemCardIndex: number;
  formControl: any;
  itemId: string;
  removeItem: UseFieldArrayRemove;
}

const ItemCard = ({ itemCardIndex, formControl, reorderRow, removeItem }: Props) => {
  const [, dropRef] = useDrop(() => ({
    accept: 'row',
    drop: (droppedItem: { itemCardIndex: number }) => {
      const draggedIndex = droppedItem.itemCardIndex;
      reorderRow(draggedIndex, itemCardIndex);
    }
  }));

  const [{ isDragging }, dragRef, previewRef] = useDrag({
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    }),
    item: () => ({
      itemCardIndex
    }),
    type: 'row'
  });

  return (
    <div ref={previewRef}>
      <div
        className={cn('flex items-center gap-4 rounded-md p-1', isDragging && 'bg-gray-300')}
        data-testid="boxmalone"
        ref={dropRef}
      >
        <div ref={dragRef}>
          <Grip className="cursor-grab" />
        </div>
        <FormField
          control={formControl}
          name={`shopping_list.${itemCardIndex}.shopping_item_name`}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col gap-3">
                    <Input placeholder="Enter Item Shopping Name..." {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={formControl}
          name={`shopping_list.${itemCardIndex}.shopping_item_quantity`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={`${field.value}`}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Enter Quantity..." id="shopping_item_quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Trash2 className="cursor-pointer" onClick={() => removeItem(itemCardIndex)} />
      </div>
    </div>
  );
};

export default ItemCard;
