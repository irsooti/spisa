import React from 'react';
import PropTypes from 'prop-types';
import userContext from './context';

export const UserProvider = ({ children }) => {
  const { Provider } = userContext;
  return <Provider>{children}</Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
