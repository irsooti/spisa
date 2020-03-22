import partition from 'ramda/es/partition';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import childrenPropType from '../../propTypes/childrenPropType';
import ShoppingEmptyList from '../ShoppingEmptyList';
import ShoppingListComplete from '../ShoppingListComplete';
import messages from './messages';

const ShoppingListFilterOrganize = ({ children, update }) => {
  const [notInTheCartItems, inTheCartItems] = partition(
    item => item.props.isAdded,
    children,
  );
  return (
    <>
      <div>
        <h2>
          <FormattedMessage {...messages.toBuy} />
        </h2>
        {inTheCartItems.length > 0 ? (
          inTheCartItems
        ) : (
          <ShoppingListComplete update={update} />
        )}
      </div>
      <div>
        <h2>
          <FormattedMessage {...messages.inTheCart} />
        </h2>
        {notInTheCartItems.length > 0 ? (
          notInTheCartItems
        ) : (
          <ShoppingEmptyList />
        )}
      </div>
    </>
  );
};

ShoppingListFilterOrganize.propTypes = {
  children: childrenPropType,
  update: PropTypes.func,
};

export default ShoppingListFilterOrganize;
