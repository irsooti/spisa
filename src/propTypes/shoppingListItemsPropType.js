import PropTypes from 'prop-types';
import shoppingListItemPropType from './shoppingListItemPropType';

export default PropTypes.shape({
  [PropTypes.string]: PropTypes.shape(shoppingListItemPropType),
});
