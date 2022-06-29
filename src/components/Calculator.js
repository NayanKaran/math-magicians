import React, { useState } from 'react';
import Function from './Function';
import Display from './Display';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    setData(calculate(data, e.target.value));
  };

  return (
    <div id="calculator">
      <Display id="display" data={data} />
      <div id="buttons">
        <div id="digits-and-functions">
          <Function
            functions={{
              values: ['AC', '+/-', '%'],
              clickEventHandler: clickHandler,
              id: 'unary-functions',
            }}
          />
          <Function
            functions={{
              values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
              clickEventHandler: clickHandler,
              id: 'neumeric-functions',
            }}
          />
        </div>
        <Function
          functions={{
            values: ['÷', 'x', '-', '+', '='],
            clickEventHandler: clickHandler,
            id: 'arithmatic-functions',
          }}
        />
      </div>
    </div>
  );
};

export default Calculator;
