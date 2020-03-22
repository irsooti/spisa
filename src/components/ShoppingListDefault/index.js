import React from 'react';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';
import { ShoppingListDefaultWrapper } from './styles';
import messages from './messages';

const ShoppingListDefault = () => {
  return (
    <ShoppingListDefaultWrapper>
      <div className="shopping-default-icon">
        <FontAwesomeIcon icon={faDrumstickBite} size="5x" />
      </div>
      <div className="shopping-default-text">
        <FormattedMessage {...messages.text} />
      </div>
    </ShoppingListDefaultWrapper>
  );
};

export default ShoppingListDefault;
