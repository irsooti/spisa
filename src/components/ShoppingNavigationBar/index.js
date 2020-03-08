import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { NavigationBar, NavigationBarItems, AddButton } from './styles';

const ShoppingNavigationBar = ({ openShoppingModal }) => {
  return (
    <NavigationBar>
      <NavigationBarItems>
        {/* <div className="item">a</div>
        <div className="item">a</div>
        <div className="item">a</div> */}
      </NavigationBarItems>
      <AddButton onClick={openShoppingModal}>
        <FontAwesomeIcon size="2x" icon={faPen} />
      </AddButton>
    </NavigationBar>
  );
};

ShoppingNavigationBar.propTypes = {
  openShoppingModal: PropTypes.func,
};

export default ShoppingNavigationBar;
