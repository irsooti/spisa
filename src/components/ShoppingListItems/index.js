import PropTypes from 'prop-types';
import React from 'react';
import shoppingListItemsPropType from '../../propTypes/shoppingListItemsPropType';
import ShoppingListItem from '../ShoppingListItem';

const ShoppingListItems = ({ items, update }) => {
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
          update={update}
          isAdded={items[key].isAdded}
        />
      ))}
    </div>
  );
};

ShoppingListItems.propTypes = {
  items: shoppingListItemsPropType,
  update: PropTypes.func,
};

export default ShoppingListItems;
