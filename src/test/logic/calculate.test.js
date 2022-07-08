import calculate from '../../logic/calculate';

it('Test Calculate JS', () => {
  const obj = { total: null, next: null, operation: null };

  let ans = calculate(obj, '15');
  ans = calculate(ans, 'x');
  ans = calculate(ans, '2');
  ans = calculate(ans, '÷');
  ans = calculate(ans, '3');
  ans = calculate(ans, '=');

  expect(ans.total).toBe('10');
});
