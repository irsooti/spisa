import React from 'react';
import shoppingListItemsPropType from '../../propTypes/shoppingListItemsPropType';
import ShoppingListItem from '../ShoppingListItem';

const ShoppingListItems = ({ items }) => {
  return (
    <div>
      {Object.keys(items).map(key => (
        <ShoppingListItem
          key={key}
          id={key}
          description={items[key].description}
          quantity={items[key].quantity}
          notes={items[key].notes}
          priority={items[key].priority}
        />
      ))}
    </div>
  );
};

ShoppingListItems.propTypes = {
  items: shoppingListItemsPropType,
};

export default ShoppingListItems;
