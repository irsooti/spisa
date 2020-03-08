import React from 'react';
import ShoppingListItems from '../ShoppingListItems';
// import PropTypes from 'prop-types';
import shoppingListItemsPropType from '../../propTypes/shoppingListItemsPropType';
import { ListItems } from './styles';

const ShoppingList = ({ shoppingListItems }) => {
  return (
    <ListItems>
      <ShoppingListItems items={shoppingListItems} />
    </ListItems>
  );
};

ShoppingList.propTypes = {
  shoppingListItems: shoppingListItemsPropType,
};

export default ShoppingList;
