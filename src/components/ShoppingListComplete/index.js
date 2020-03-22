import React from 'react';
import PropTypes from 'prop-types';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';

import { ShoppingListWrapper } from './styles';
import Button from '../Button';
import messages from './messages';

const ShoppingListComplete = ({ update }) => {
  const handleResetList = () => {
    update()
      .set({})
      .then(() => {
        console.log('RESETTED');
      });
  };

  return (
    <ShoppingListWrapper>
      <div className="shopping-done">
        <div className="shopping-done-ok">
          <FontAwesomeIcon icon={faThumbsUp} size="5x" />
        </div>
        <div className="shopping-done-text">
          <FormattedMessage {...messages.description} />
        </div>
      </div>
      <div>
        <Button block onClick={handleResetList}>
          <FormattedMessage {...messages.resetButton} />
        </Button>
      </div>
    </ShoppingListWrapper>
  );
};

ShoppingListComplete.propTypes = {
  update: PropTypes.func,
};

export default ShoppingListComplete;
