import React, { useEffect, useContext } from 'react';
import { useFirebaseRef } from '../../hooks';
import userContext from '../UserProvider/context';
import { SHOPPING_NODE } from './constants';
import ShoppingListItems from '../ShoppingListItems';

export const ShoppingList = () => {
  const { value, update } = useFirebaseRef(SHOPPING_NODE, 'value');
  const user = useContext(userContext);

  useEffect(() => {
    update().push({
      description: 'polvere da sparo',
    });

    console.log(value);
  }, [value, user, update]);

  return (
    <div>
      <ShoppingListItems items={value} />
    </div>
  );
};
