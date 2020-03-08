import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { StyledIcon } from './styles';

const BadgeIcon = ({ type }) => {
  const icon = useMemo(() => {
    switch (type) {
      case 'warning':
      case 'danger':
        return <FontAwesomeIcon size="xs" icon={faExclamationTriangle} />;

      default:
        return <FontAwesomeIcon size="xs" icon={faExclamationCircle} />;
    }
  }, [type]);

  return <StyledIcon type={type}>{icon}</StyledIcon>;
};

BadgeIcon.propTypes = {
  type: PropTypes.oneOf(['danger', 'warning', 'info']),
};

export default BadgeIcon;
