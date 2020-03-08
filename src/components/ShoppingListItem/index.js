import React from 'react';
import shoppingListItemPropType from '../../propTypes/shoppingListItemPropType';
import { ListItem, QuantityItem, NoteItem, InTheCartOverlay } from './styles';
// import Badge from '../Badge';
import ShoppingListItemCart from '../ShoppingListItemCart';

const ShoppingListItem = ({
  id,
  isAdded,
  description,
  quantity,
  notes,
  update,
  priority,
}) => {
  const handleUpdate = () => {
    update(`/${id}`).update({
      id,
      isAdded: !isAdded,
      description,
      quantity,
      notes,
      priority,
    });
  };

  return (
    <ListItem>
      <InTheCartOverlay isAdded={isAdded}>
        {/* <div>Preso</div> */}
      </InTheCartOverlay>
      <div className="item-header-row">
        {/* <div className="item-header-col">
          <Badge type="warning">Ca</Badge>
        </div> */}
        <div className="item-header-col">
          <ShoppingListItemCart toggleCart={handleUpdate} isInCart={isAdded} />
        </div>
      </div>
      <div className="item-title-row">
        <QuantityItem>{quantity}</QuantityItem>
        <h3>{description}</h3>
      </div>
      {notes && (
        <div className="item-notes-row">
          <NoteItem>{notes}</NoteItem>
        </div>
      )}
    </ListItem>
  );
};

ShoppingListItem.propTypes = shoppingListItemPropType;

export default ShoppingListItem;
