import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';
import { useShoppingForm } from './hooks/useShoppingForm';
import messages from './messages';

const ShoppingModal = ({ onSubmit, isOpen, closeModal }) => {
  const { handleSubmit, register, errors } = useShoppingForm();

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <div className="modal-row">
            <Input
              isError={!!errors.quantity}
              name="quantity"
              size={{ width: '50%' }}
              type="number"
              label={<FormattedMessage {...messages.quantity} />}
              ref={register}
            />
            <Input
              isError={!!errors.unit}
              name="unit"
              size={{ width: '50%' }}
              type="text"
              label={<FormattedMessage {...messages.unit} />}
              ref={register}
            />
          </div>

          <div className="modal-row">
            <Input
              isError={!!errors.description}
              size={{ width: '100%' }}
              name="description"
              label={<FormattedMessage {...messages.description} />}
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
        </Modal.Body>
        <Modal.Footer>
          <Button block type="submit">
            <FormattedMessage {...messages.add} />
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

ShoppingModal.propTypes = {
  onSubmit: PropTypes.func,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default ShoppingModal;
