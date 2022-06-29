import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent {
  render = () => {
    const { buttonProp: { onClick, value } } = this.props;
    return (
      <button type="button" onClick={onClick} value={value}>
        {value}
      </button>
    );
  };
}

Button.propTypes = {
  buttonProp: PropTypes.shape({
    onClick: PropTypes.func,
    value: PropTypes.string,
  }),
};

Button.defaultProps = {
  buttonProp: null,
};
