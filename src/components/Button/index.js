/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import PropTypes from 'prop-types';
import { StyledButton } from './styles';
import childrenPropType from '../../propTypes/childrenPropType';

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  children: childrenPropType,
};

export default Button;
