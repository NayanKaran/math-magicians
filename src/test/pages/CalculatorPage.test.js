import renderer from 'react-test-renderer';
import CalculatorPage from '../../pages/CalculatorPage';

describe('Testing CalculatorPage component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
