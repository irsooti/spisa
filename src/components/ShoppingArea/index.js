import React, { useCallback, useEffect, useState } from 'react';
import { useFirebaseRef } from '../../hooks';
import ShoppingList from '../ShoppingList';
import ShoppingModal from '../ShoppingModal';
import ShoppingNavigationBar from '../ShoppingNavigationBar';
import { SHOPPING_NODE } from './constants';
import { ShoppingAreaWrapper } from './styles';

const ShoppingArea = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const { value: shoppingListItems, update } = useFirebaseRef(
    SHOPPING_NODE,
    'value',
  );

  useEffect(() => {}, [shoppingListItems]);

  const onNoteSubmit = useCallback(
    ({ description, notes, quantity }) => {
      update()
        .push({ description, notes, quantity, priority: 0 })
        .then(() => {
          toggleModal();
        });
    },
    [update],
  );

  return (
    <>
      <ShoppingAreaWrapper>
        <ShoppingList shoppingListItems={shoppingListItems || {}} />
        <ShoppingNavigationBar openShoppingModal={toggleModal} />
      </ShoppingAreaWrapper>
      <ShoppingModal
        closeModal={toggleModal}
        isOpen={isModalOpen}
        onSubmit={onNoteSubmit}
      />
    </>
  );
};

ShoppingArea.propTypes = {};

export default ShoppingArea;
