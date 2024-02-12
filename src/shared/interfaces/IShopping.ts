export enum ListType {
  GROCERY = 'grocery',
  HOME_GOODS = 'home_goods',
  HARDWARE = 'hardware'
}

export interface IShopping {
  item_name: string;
  quantity: number;
}

export interface ShoppingItem {
  shopping_id: string;
  shopping_item_name: string;
  shopping_item_quantity: string;
}

export interface ShoppingListData {
  list_id: string;
  list_name: string;
  list_type: string;
  list_img: string;
  shopping_list: ShoppingItem[];
}
