import React from 'react';
import Function from './Function';
import Display from './Display';
import './Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    this.setState((prevState) => calculate(prevState, e.target.value));
  };

  render = () => {
    const { total, next, operation } = this.state;
    return (
      <div id="calculator">
        <Display id="display" data={{ total, next, operation }} />
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
