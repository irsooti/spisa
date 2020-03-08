import PropTypes from 'prop-types';
import React from 'react';
import shoppingListItemsPropType from '../../propTypes/shoppingListItemsPropType';
import ShoppingListItems from '../ShoppingListItems';
import { ListItems } from './styles';

const ShoppingList = ({ shoppingListItems, update }) => {
  return (
    <ListItems>
      <ShoppingListItems update={update} items={shoppingListItems} />
    </ListItems>
  );
};

ShoppingList.propTypes = {
  shoppingListItems: shoppingListItemsPropType,
  update: PropTypes.func,
};

export default ShoppingList;
