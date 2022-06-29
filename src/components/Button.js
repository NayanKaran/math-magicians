import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonProp: { onClick, value } } = props;

  return (
    <button type="button" onClick={onClick} value={value}>
      {value}
    </button>
  );
};

export default Button;

Button.propTypes = {
  buttonProp: PropTypes.shape({
    onClick: PropTypes.func,
    value: PropTypes.string,
  }),
};

Button.defaultProps = {
  buttonProp: null,
};
