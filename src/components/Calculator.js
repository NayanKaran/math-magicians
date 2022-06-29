import React from 'react';
import Function from './Function';
import Display from './Display';
import './Calculator.css';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { answer: '0' };
  }

  clickHandler = () => {
  };

  render = () => {
    const { answer } = this.state;
    return (
      <div id="calculator">
        <Display id="display" value={answer} />
        <div id="buttons">
          <div id="digits-and-functions">
            <Function
              functions={{
                values: ['AC', '+/-', '%'],
                clickEventHandler: this.clickHandler,
                id: 'unary-functions',
              }}
            />
            <Function
              functions={{
                values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
                clickEventHandler: this.clickHandler,
                id: 'neumeric-functions',
              }}
            />
          </div>
          <Function
            functions={{
              values: ['÷', 'x', '-', '+', '='],
              clickEventHandler: this.clickHandler,
              id: 'arithmatic-functions',
            }}
          />
        </div>
      </div>
    );
  };
}
