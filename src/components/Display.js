import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.PureComponent {
  render = () => {
    const { id, value } = this.props;
    return (<p id={id}>{value}</p>);
  };
}

Display.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
};

Display.defaultProps = {
  id: '',
  value: '0',
};
