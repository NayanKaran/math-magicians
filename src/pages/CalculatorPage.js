import React from 'react';
import NavBar from '../components/NavBar';
import Calculator from '../components/Calculator';

const CalculatorPage = () => (
  <>
    <NavBar />
    <main id="calculator-main">
      <p>Lets do some math!</p>
      <Calculator />
    </main>
  </>
);

export default CalculatorPage;
