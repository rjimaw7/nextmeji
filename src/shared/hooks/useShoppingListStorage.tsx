import { useEffect, useState } from 'react';

import { shoppingLists } from '../constants/dummyItems';
import type { ShoppingListData } from '../interfaces/IShopping';

const useShoppingListStorage = () => {
  const [shoppingListsData, setShoppingListsData] = useState<ShoppingListData[]>([]);

  useEffect(() => {
    // Retrieve data from session storage when component mounts
    const storedData = JSON.parse(sessionStorage.getItem('shoppingLists') || '[]');
    if (storedData && storedData.length > 0) {
      setShoppingListsData(storedData);
    } else {
      // If no data found in session storage, initialize with dummyShoppingLists
      sessionStorage.setItem('shoppingLists', JSON.stringify(shoppingLists));
      setShoppingListsData(shoppingLists);
    }
  }, []);

  const saveShoppingLists = (newValues: ShoppingListData[]) => {
    // Prepend the updated values to the existing list
    const newShoppingLists = [...newValues, ...shoppingListsData];
    // Save data to session storage and update state
    sessionStorage.setItem('shoppingLists', JSON.stringify(newShoppingLists));
    setShoppingListsData(newShoppingLists);
  };

  const updateShoppingList = (id: string, updatedObject: ShoppingListData) => {
    const updatedShoppingLists = shoppingListsData.map((item) => {
      if (item.list_id === id) {
        return { ...item, ...updatedObject };
      }
      return item;
    });
    saveShoppingLists(updatedShoppingLists);
  };

  const deleteShoppingList = (id: string) => {
    const updatedShoppingLists = shoppingListsData.filter((item) => item.list_id !== id);
    saveShoppingLists(updatedShoppingLists);
  };

  return {
    shoppingListsData,
    saveShoppingLists,
    updateShoppingList,
    deleteShoppingList
  };
};

export default useShoppingListStorage;
