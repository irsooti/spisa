import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export const useShoppingForm = () => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      quantity: 1,
      notes: '',
      description: '',
    },
    validationSchema: yup.object().shape({
      quantity: yup
        .number()
        .min(1)
        .max(99)
        .required(),
      description: yup.string().required(),
      notes: yup.string(),
    }),
  });

  return { register, handleSubmit, errors };
};
