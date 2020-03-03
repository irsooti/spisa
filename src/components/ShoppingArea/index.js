import React, { useCallback, useEffect } from 'react';
import { useFirebaseRef } from '../../hooks';
import ShoppingInput from '../ShoppingInput';
import ShoppingList from '../ShoppingList';
import { SHOPPING_NODE } from './constants';

const ShoppingArea = () => {
  const { value: shoppingListItems, update } = useFirebaseRef(
    SHOPPING_NODE,
    'value',
  );

  useEffect(() => {}, [shoppingListItems]);

  const onNoteSubmit = useCallback(
    ({ description, notes, quantity }) => {
      update().push({ description, notes, quantity });
    },
    [update],
  );

  return (
    <div>
      <ShoppingList shoppingListItems={shoppingListItems || {}} />
      <ShoppingInput onSubmit={onNoteSubmit} />
    </div>
  );
};

ShoppingArea.propTypes = {};

export default ShoppingArea;
