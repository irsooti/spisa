import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const ShoppingInput = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      quantity: 1,
      notes: '',
      description: '',
    },
    validationSchema: yup.object().shape({
      quantity: yup
        .number()
        .min(1)
        .max(100)
        .required(),
      description: yup.string().required(),
      notes: yup.string(),
    }),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="quantity" type="number" ref={register} />
      <input name="description" type="text" ref={register} />
      <input name="notes" type="text" ref={register} />
      <input type="submit" value="Submit" />
    </form>
  );
};

ShoppingInput.propTypes = {
  onSubmit: PropTypes.func,
};

export default ShoppingInput;
