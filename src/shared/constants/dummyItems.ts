import type { IShopping, ShoppingListData } from '../interfaces/IShopping';

export const shoppingItems: IShopping[] = [
  { item_name: 'banana', quantity: 2 },
  { item_name: 'apple', quantity: 4 },
  { item_name: 'orange', quantity: 3 },
  { item_name: 'milk', quantity: 1 },
  { item_name: 'bread', quantity: 2 },
  { item_name: 'eggs', quantity: 12 },
  { item_name: 'potato', quantity: 5 },
  { item_name: 'tomato', quantity: 6 }
];

export const shoppingLists: ShoppingListData[] = [
  {
    list_id: 'lst123abc',
    list_name: 'Groceries',
    list_type: 'home_goods',
    list_img: '/groceryimg.jpg',
    shopping_list: [
      {
        shopping_id: 's1a2b3',
        shopping_item_name: 'Apples',
        shopping_item_quantity: '5'
      },
      {
        shopping_id: 's4c5d6',
        shopping_item_name: 'Milk',
        shopping_item_quantity: '2'
      },
      {
        shopping_id: 's7e8f9',
        shopping_item_name: 'Bread',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's10g11h12',
        shopping_item_name: 'Eggs',
        shopping_item_quantity: '12'
      },
      {
        shopping_id: 's13i14j15',
        shopping_item_name: 'Chicken',
        shopping_item_quantity: '2'
      },
      {
        shopping_id: 's16k17l18',
        shopping_item_name: 'Rice',
        shopping_item_quantity: '1'
      }
    ]
  },
  {
    list_id: 'lst456def',
    list_name: 'Household Items',
    list_type: 'home_goods',
    list_img: '/householdimg.jpg',
    shopping_list: [
      {
        shopping_id: 's19m20n21',
        shopping_item_name: 'Soap',
        shopping_item_quantity: '3'
      },
      {
        shopping_id: 's22o23p24',
        shopping_item_name: 'Toothpaste',
        shopping_item_quantity: '2'
      },
      {
        shopping_id: 's25q26r27',
        shopping_item_name: 'Tissues',
        shopping_item_quantity: '4'
      }
    ]
  },
  {
    list_id: 'lst789ghi',
    list_name: 'Home Goods',
    list_type: 'home_goods',
    list_img: '/homegoodsimg.jpg',
    shopping_list: [
      {
        shopping_id: 's28s29t30',
        shopping_item_name: 'Curtains',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's31u32v33',
        shopping_item_name: 'Throw Pillows',
        shopping_item_quantity: '2'
      },
      {
        shopping_id: 's34w35x36',
        shopping_item_name: 'Blanket',
        shopping_item_quantity: '1'
      }
    ]
  },
  {
    list_id: 'lst987jkl',
    list_name: 'Hardware Store',
    list_type: 'hardware',
    list_img: '/hardwareimg.jpg',
    shopping_list: [
      {
        shopping_id: 's37y38z39',
        shopping_item_name: 'Screws',
        shopping_item_quantity: '12'
      },
      {
        shopping_id: 's40a41b42',
        shopping_item_name: 'Nails',
        shopping_item_quantity: '11'
      },
      {
        shopping_id: 's43c44d45',
        shopping_item_name: 'Hammer',
        shopping_item_quantity: '10'
      }
    ]
  },
  {
    list_id: 'lst654mno',
    list_name: 'Tools',
    list_type: 'hardware',
    list_img: '/toolsimg.jpg',
    shopping_list: [
      {
        shopping_id: 's46e47f48',
        shopping_item_name: 'Screwdriver',
        shopping_item_quantity: '2'
      },
      {
        shopping_id: 's49g50h51',
        shopping_item_name: 'Wrench',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's52i53j54',
        shopping_item_name: 'Drill',
        shopping_item_quantity: '1'
      }
    ]
  },
  {
    list_id: 'lst123abc',
    list_name: 'Groceries',
    list_type: 'grocery',
    list_img: '/groceryimg.jpg',
    shopping_list: [
      {
        shopping_id: 's1a2b3',
        shopping_item_name: 'Apples',
        shopping_item_quantity: '5'
      },
      {
        shopping_id: 's4c5d6',
        shopping_item_name: 'Milk',
        shopping_item_quantity: '2'
      },
      {
        shopping_id: 's7e8f9',
        shopping_item_name: 'Bread',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's10g11h12',
        shopping_item_name: 'Eggs',
        shopping_item_quantity: '12'
      },
      {
        shopping_id: 's13i14j15',
        shopping_item_name: 'Chicken',
        shopping_item_quantity: '2'
      },
      {
        shopping_id: 's16k17l18',
        shopping_item_name: 'Rice',
        shopping_item_quantity: '1'
      }
    ]
  },
  {
    list_id: 'lst456def',
    list_name: 'Electronics',
    list_type: 'home_goods',
    list_img: '/electronicsimg.jpg',
    shopping_list: [
      {
        shopping_id: 's19m20n21',
        shopping_item_name: 'Laptop',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's22o23p24',
        shopping_item_name: 'Smartphone',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's25q26r27',
        shopping_item_name: 'Headphones',
        shopping_item_quantity: '1'
      }
    ]
  },
  {
    list_id: 'lst789ghi',
    list_name: 'Cleaning Supplies',
    list_type: 'home_goods',
    list_img: '/cleaningimg.jpg',
    shopping_list: [
      {
        shopping_id: 's28s29t30',
        shopping_item_name: 'Bleach',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's31u32v33',
        shopping_item_name: 'Dish Soap',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's34w35x36',
        shopping_item_name: 'Trash Bags',
        shopping_item_quantity: '1'
      }
    ]
  },
  {
    list_id: 'lst987jkl',
    list_name: 'Gardening',
    list_type: 'home_goods',
    list_img: '/gardeningimg.jpg',
    shopping_list: [
      {
        shopping_id: 's37y38z39',
        shopping_item_name: 'Seeds',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's40a41b42',
        shopping_item_name: 'Gloves',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's43c44d45',
        shopping_item_name: 'Shovel',
        shopping_item_quantity: '1'
      }
    ]
  },
  {
    list_id: 'lst654mno',
    list_name: 'Building Supplies',
    list_type: 'hardware',
    list_img: '/hardware.jpg',
    shopping_list: [
      {
        shopping_id: 's46e47f48',
        shopping_item_name: 'Lumber',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's49g50h51',
        shopping_item_name: 'Nails',
        shopping_item_quantity: '1'
      },
      {
        shopping_id: 's52i53j54',
        shopping_item_name: 'Screws',
        shopping_item_quantity: '1'
      }
    ]
  }
];
