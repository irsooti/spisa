/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper } from './styles';

const Input = (
  {
    label,
    type,
    onChange,
    value,
    defaultValue,
    placeholder,
    size,
    isError,
    ...rest
  },
  ref,
) => {
  const input = useMemo(() => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            ref={ref}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
            {...rest}
            type={type}
          />
        );
      case 'text':
        return (
          <input
            ref={ref}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
            {...rest}
            type={type}
          />
        );

      default:
        return (
          <input
            ref={ref}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
            {...rest}
            type={type}
          />
        );
    }
  }, [type, ref, placeholder, onChange, value, defaultValue, rest]);

  return (
    <InputWrapper error={isError} className="spisa-input" size={size}>
      <label>
        {label}
        {input}
      </label>
    </InputWrapper>
  );
};

Input.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.oneOf(['text', 'number', 'textarea']),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  size: PropTypes.shape({ width: PropTypes.string }),
  isError: PropTypes.bool,
};

export default React.forwardRef(Input);
