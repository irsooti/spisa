import React from 'react';
import PropTypes from 'prop-types';

import { BadgeContainer } from './styled';
import childrenPropType from '../../propTypes/childrenPropType';
import BadgeIcon from '../BadgeIcon';

const Badge = ({ children, type }) => {
  return (
    <BadgeContainer type={type}>
      <span>{children}</span>
      <BadgeIcon type={type} />
    </BadgeContainer>
  );
};

Badge.propTypes = {
  children: childrenPropType,
  type: PropTypes.oneOf(['danger', 'warning', 'info']),
};

export default Badge;
