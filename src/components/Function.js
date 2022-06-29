import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Function = (props) => {
  const {
    functions: { values, clickEventHandler, id },
  } = props;

  const buttons = values.map((value) => (
    <Button
      key={value}
      buttonProp={{
        onClick: clickEventHandler,
        value,
      }}
    />
  ));

  return <div id={id}>{buttons}</div>;
};

export default Function;

Function.propTypes = {
  functions: PropTypes.shape({
    values: PropTypes.arrayOf(PropTypes.string),
    clickEventHandler: PropTypes.func,
    id: PropTypes.string,
  }),
};

Function.defaultProps = {
  functions: null,
};
