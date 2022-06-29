import React from 'react';
import PropTypes from 'prop-types';

function getInnerText(data) {
  const { total, operation, next } = data;
  if (!total && !operation && next) {
    return next;
  }
  if (total && !operation && !next) {
    return total;
  }
  if (total && operation && !next) {
    return `${total} ${operation}`;
  }
  if (total && operation && next) {
    return `${total} ${operation} ${next}`;
  }
  return '0';
}

const Display = (props) => {
  const { data, id } = props;
  return <p id={id}>{getInnerText(data)}</p>;
};

export default Display;

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
