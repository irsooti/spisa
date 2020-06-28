import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import childrenPropType from '../../propTypes/childrenPropType';
import { ModalBox, ModalWrapper, ModalFooter, ModalContent } from './styles';

const Modal = ({ isOpen, onClose, children }) => {
  const randomModalNumber = useMemo(
    () => `modal-${Math.floor(Math.random() * 10)}`,
    [],
  );
  return (
    <CSSTransition in={isOpen} timeout={300} unmountOnExit classNames="modal">
      <ModalWrapper
        id={randomModalNumber}
        onClick={(evt) => {
          evt.stopPropagation();
          if (evt.target.id === evt.currentTarget.id) {
            onClose();
          }
        }}
      >
        <div className="modal">
          <ModalBox>
            <div className="modal-header">
              <FontAwesomeIcon onClick={onClose} role="button" icon={faTimes} />
            </div>
            {children}
          </ModalBox>
        </div>
      </ModalWrapper>
    </CSSTransition>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: childrenPropType,
};

Modal.Footer = ModalFooter;
Modal.Body = ModalContent;

export default Modal;
