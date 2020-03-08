import { faCartArrowDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { CartButton } from './styles';

const ShoppingListItemCart = ({ toggleCart, isInCart }) => {
  return (
    <CartButton onClick={toggleCart} isInCart={isInCart}>
      {isInCart ? (
        <FontAwesomeIcon size="2x" icon={faCheck} />
      ) : (
        <FontAwesomeIcon size="2x" icon={faCartArrowDown} />
      )}
    </CartButton>
  );
};

ShoppingListItemCart.propTypes = {
  toggleCart: PropTypes.func,
  isInCart: PropTypes.bool,
};

export default ShoppingListItemCart;
