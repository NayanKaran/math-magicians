import React from 'react';
import PropTypes from 'prop-types';

function getInnerText(data) {
  const { total, operation, next } = data;
  if (total === null && operation === null && next !== null) {
    return next;
  }
  if (total !== null && operation === null && next === null) {
    return total;
  }
  if (total !== null && operation !== null && next === null) {
    return `${total} ${operation}`;
  }
  if (total !== null && operation !== null && next !== null) {
    return `${total} ${operation} ${next}`;
  }
  return '0';
}

export default class Display extends React.PureComponent {
  render = () => {
    const { data, id } = this.props;
    return (
      <p id={id}>{getInnerText(data)}</p>
    );
  };
}

Display.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.string,
    operation: PropTypes.string,
    next: PropTypes.string,
  }),
  id: PropTypes.string,
};

Display.defaultProps = {
  data: null,
  id: null,
};
