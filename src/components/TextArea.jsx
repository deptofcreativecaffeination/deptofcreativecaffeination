import React, { PropTypes } from 'react';

const TextArea = ({ name, type, placeholder, value, handleChange, isValid }) => {
  function getClassNames() {
    const classNames = ['textarea-wrapper'];

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
      <textarea
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default TextArea;
