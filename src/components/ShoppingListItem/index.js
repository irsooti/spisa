import React from 'react';
import shoppingListItemPropType from '../../propTypes/shoppingListItemPropType';
import { ListItem, QuantityItem, NoteItem } from './styles';

const ShoppingListItem = ({ description, quantity, notes }) => {
  return (
    <ListItem>
      <div className="item-title-row">
        <QuantityItem>{quantity}</QuantityItem>
        <h3>{description}</h3>
      </div>
      <div className="item-notes-row">
        <NoteItem>{notes}</NoteItem>
      </div>
    </ListItem>
  );
};

ShoppingListItem.propTypes = shoppingListItemPropType;

export default ShoppingListItem;
