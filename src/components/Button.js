import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent {
  render = () => {
    const { buttonProp: { clickHandler, value } } = this.props;
    return (
      <button type="button" onClick={clickHandler} value={value}>
        {value}
      </button>
    );
  };
}

Button.propTypes = {
  buttonProp: PropTypes.shape({
    clickHandler: PropTypes.func,
    value: PropTypes.string,
  }),
};

Button.defaultProps = {
  buttonProp: null,
};
