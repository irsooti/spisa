import React from 'react';
import childrenPropType from '../../propTypes/childrenPropType';

export const Layout = ({ children }) => {
  return <div>{children}</div>;
};

Layout.propTypes = {
  children: childrenPropType.isRequired,
};
