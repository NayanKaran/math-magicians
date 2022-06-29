import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Function extends React.PureComponent {
    render = () => {
      const buttons = [];
      const { functions: { values, clickEventHandler, id } } = this.props;
      values.forEach((value) => {
        buttons.push(
          <Button
            key={value}
            buttonProp={{
              onClick: clickEventHandler,
              value,
            }}
          />,
        );
      });

      return (
        <div id={id}>
          {buttons}
        </div>
      );
    };
}

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
