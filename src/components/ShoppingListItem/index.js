import React from 'react';
import shoppingListItemPropType from '../../propTypes/shoppingListItemPropType';

const ShoppingListItem = ({ description, quantity, notes }) => {
  return (
    <div>
      <h3>{description}</h3>
      <div>{quantity}</div>
      <div>{notes}</div>
    </div>
  );
};

ShoppingListItem.propTypes = shoppingListItemPropType;

export default ShoppingListItem;
