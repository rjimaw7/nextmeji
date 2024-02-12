import { z } from 'zod';

const ShoppingItemSchema = z.object({
  shopping_id: z.string(),
  shopping_item_name: z.string().min(1, {
    message: 'Shopping Item Name is Required'
  }),
  shopping_item_quantity: z.string().min(1, {
    message: 'Shopping Item Quantity is Required'
  })
});

export const ShoppingListSchema = z.object({
  list_name: z.string().min(1, {
    message: 'List Name is Required'
  }),
  list_type: z.string().min(1, {
    message: 'List Type is Required'
  }),
  list_img: z.string().optional(),
  shopping_list: z.array(ShoppingItemSchema).min(1, {
    message: 'At least one item is required in the shopping list'
  })
});

export const MergedSchema = z.union([ShoppingItemSchema, ShoppingListSchema]);

export type ShoppingListType = z.infer<typeof MergedSchema>;
export type ShoppingItemType = z.infer<typeof ShoppingItemSchema>;
