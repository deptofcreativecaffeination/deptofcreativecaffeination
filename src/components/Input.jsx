import React, { PropTypes } from 'react';

const Input = ({ name, type, placeholder, value, handleChange, isValid }) => {
  function getClassNames() {
    const classNames = ['input-wrapper'];

    if (!value.length) {
      classNames.push('is-empty');
    } else if (isValid) {
      classNames.push('is-valid');
    } else if (!isValid) {
      classNames.push('is-invalid');
    }

    return classNames.join(' ');
  }

  return (
    <div className={getClassNames()}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
