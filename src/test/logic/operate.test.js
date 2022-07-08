import operate from '../../logic/operate';

it('Testing operate.js', () => {
  expect(operate(23, 2, '+')).toBe('25');
  expect(operate(23, 2, '-')).toBe('21');
  expect(operate(23, 2, 'x')).toBe('46');
  expect(operate(23, 2, '÷')).toBe('11.5');
  expect(operate(23, 0, '÷')).toBe('Can\'t divide by 0.');
  expect(operate(23, 2, '%')).toBe('1');
  expect(operate(23, 0, '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
});
