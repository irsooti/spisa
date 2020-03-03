import React from 'react';
import ShoppingListItems from '../ShoppingListItems';
// import PropTypes from 'prop-types';
import shoppingListItemsPropType from '../../propTypes/shoppingListItemsPropType';

const ShoppingList = ({ shoppingListItems }) => {
  return (
    <div>
      <ShoppingListItems items={shoppingListItems} />
    </div>
  );
};

ShoppingList.propTypes = {
  shoppingListItems: shoppingListItemsPropType,
};

export default ShoppingList;
