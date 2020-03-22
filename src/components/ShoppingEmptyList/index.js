import React from 'react';
// import PropTypes from 'prop-types';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { EmptyListWrapper } from './styles';

const ShoppingEmptyList = () => {
  return (
    <EmptyListWrapper>
      <div>
        <FontAwesomeIcon icon={faSadCry} size="5x" />
      </div>
      <div className="empty-text">
        <FormattedMessage {...messages.emptyText} />
      </div>
    </EmptyListWrapper>
  );
};

ShoppingEmptyList.propTypes = {};

export default ShoppingEmptyList;
