import PropTypes from 'prop-types';
import React from 'react';
import userContext from './context';

export const UserProvider = ({ user, children }) => {
  const { Provider } = userContext;
  return <Provider value={user}>{children}</Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
};
