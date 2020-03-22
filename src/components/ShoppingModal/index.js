import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import Button from '../Button';
import Input from '../Input';
import { useShoppingForm } from './hooks/useShoppingForm';
import { ShoppingModalBox, ShoppingModalWrapper } from './styles';
import messages from './messages';

const ShoppingModal = ({ onSubmit, isOpen, closeModal }) => {
  const { handleSubmit, register, errors } = useShoppingForm();

  if (!isOpen) return null;

  return (
    <ShoppingModalWrapper>
      <ShoppingModalBox>
        <div className="modal-header">
          <FontAwesomeIcon onClick={closeModal} role="button" icon={faTimes} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-row">
            <Input
              isError={!!errors.description}
              size={{ width: '80%' }}
              name="description"
              label={<FormattedMessage {...messages.description} />}
              ref={register}
            />
            <Input
              isError={!!errors.quantity}
              name="quantity"
              size={{ width: '20%' }}
              type="number"
              label={<FormattedMessage {...messages.quantity} />}
              ref={register}
            />
          </div>
          <div className="modal-row">
            <Input
              isError={!!errors.notes}
              ref={register}
              name="notes"
              type="textarea"
              label={<FormattedMessage {...messages.notes} />}
              placeholder="bla bla bla..."
            />
          </div>
          <div className="modal-footer">
            <Button block type="submit">
              <FormattedMessage {...messages.add} />
            </Button>
          </div>
        </form>
      </ShoppingModalBox>
    </ShoppingModalWrapper>
  );
};

ShoppingModal.propTypes = {
  onSubmit: PropTypes.func,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default ShoppingModal;
