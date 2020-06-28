import PropTypes from 'prop-types';
import React from 'react';
import shoppingListItemsPropType from '../../propTypes/shoppingListItemsPropType';
import ShoppingListItem from '../ShoppingListItem';
import ShoppingListFilterOrganize from '../ShoppingListFilterOrganize';

const ShoppingListItems = ({ items, update }) => {
  return (
    <div>
      <ShoppingListFilterOrganize update={update}>
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
            unit={items[key].unit || ''}
          />
        ))}
      </ShoppingListFilterOrganize>
    </div>
  );
};

ShoppingListItems.propTypes = {
  items: shoppingListItemsPropType,
  update: PropTypes.func,
};

export default ShoppingListItems;
