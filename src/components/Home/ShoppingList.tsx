/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { revalidate } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { generateShoppingId } from '@/lib/utils';
import useShoppingListStorage from '@/shared/hooks/useShoppingListStorage';
import type { ShoppingListData } from '@/shared/interfaces/IShopping';
import type { ShoppingListType } from '@/shared/zod/schema';
import { MergedSchema } from '@/shared/zod/schema';

import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { useToast } from '../ui/use-toast';
import ItemCard from './ItemCard';

interface Props {
  paramsListData?: ShoppingListData;
}

const ShoppingList = ({ paramsListData }: Props) => {
  const [loading, setLoading] = useState(false);
  const [deletedLoading, setDeleteLoading] = useState(false);

  const { toast } = useToast();
  const { push } = useRouter();
  const { saveShoppingLists, updateShoppingList, deleteShoppingList } = useShoppingListStorage();
  const form = useForm<ShoppingListType>({
    resolver: zodResolver(MergedSchema),
    defaultValues: {
      list_img: '/newimg.jpg',
      list_name: '',
      list_type: '',
      shopping_list: []
    }
  });

  const { fields, prepend, move, remove } = useFieldArray({
    name: 'shopping_list',
    control: form.control
  });

  const handleAddItem = () => {
    const newItem: any = {
      shopping_id: generateShoppingId(),
      shopping_item_name: '',
      shopping_item_quantity: ''
    };
    prepend(newItem);
  };

  const reorderRow = (draggedRowIndex: number, targetRowIndex: number) => {
    move(draggedRowIndex, targetRowIndex);
  };

  const onSubmit = (values: any) => {
    setLoading(true);

    const id = generateShoppingId();

    const updatedValues = {
      list_id: paramsListData ? paramsListData.list_id : id,
      ...values
    };

    setTimeout(() => {
      if (paramsListData) {
        updateShoppingList(paramsListData.list_id, updatedValues);
      } else {
        saveShoppingLists([updatedValues]);
      }

      toast({
        title: `Shopping List ${paramsListData ? 'Updated' : 'Saved'}!`
      });

      setLoading(false);
      revalidate('/');
      push('/');
    }, 2000);
  };

  const handleDeleteList = (id: string) => {
    setDeleteLoading(true);

    try {
      setTimeout(() => {
        deleteShoppingList(id);
        toast({
          title: 'Item Deleted'
        });
        setDeleteLoading(false);
        revalidate('/');
        push('/');
      }, 2000);
    } catch (error) {
      toast({
        title: 'Something Went Wrong!'
      });
    }
  };

  useEffect(() => {
    if (paramsListData) {
      form.setValue('list_img', paramsListData.list_img);
      form.setValue('list_name', paramsListData.list_name);
      form.setValue('list_type', paramsListData.list_type);
      form.setValue('shopping_list', paramsListData.shopping_list);
    }
  }, [paramsListData]);

  return (
    <Form {...form}>
      <div className="mt-10 flex w-full flex-col gap-4 rounded-md border p-5 md:w-auto">
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <FormField
            control={form.control}
            name="list_name"
            render={({ field }) => (
              <FormItem className="w-full md:w-auto">
                <FormControl>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="list-name">List Name</Label>
                    <Input id="list-name" placeholder="List Name" {...field} />
                  </div>
                </FormControl>
                <FormMessage className="flex justify-start" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="list_type"
            render={({ field }) => (
              <FormItem className="w-full md:w-auto">
                <FormControl>
                  <div className="flex flex-col gap-3">
                    <Label>Type</Label>
                    <Select onValueChange={field.onChange} value={field.value} defaultValue={`${field.value}`}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Select Type" id="list_type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="grocery">Grocery</SelectItem>
                          <SelectItem value="home_goods">Home Goods</SelectItem>
                          <SelectItem value="hardware">Hardware</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
                <FormMessage className="flex justify-start" />
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button className="w-full" onClick={handleAddItem}>
            Add An Item
          </Button>
        </div>
        <div className="flex justify-around rounded-md bg-gray-200 p-3">
          <Label>Item Name</Label>
          <Label>Quantity</Label>
        </div>

        {fields.map((item, index: number) => (
          <ItemCard
            formControl={form.control}
            itemCardIndex={index}
            reorderRow={reorderRow}
            key={item.id}
            itemId={item.id}
            removeItem={remove}
          />
        ))}

        <div className="flex items-center justify-end gap-3">
          {paramsListData && (
            <Button
              variant="destructive"
              onClick={() => handleDeleteList(paramsListData.list_id)}
              className="flex items-center gap-1"
            >
              {deletedLoading && <Loader2 size={18} className="animate-spin text-white" />}
              Delete
            </Button>
          )}
          <Button onClick={() => form.handleSubmit(onSubmit)()} className="flex items-center gap-1">
            {loading && <Loader2 size={18} className="animate-spin text-white" />}
            {paramsListData ? 'Update' : 'Create'}
          </Button>
          <Button variant="secondary" onClick={() => push('/')}>
            Cancel
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ShoppingList;
