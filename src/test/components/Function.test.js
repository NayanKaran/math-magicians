import renderer from 'react-test-renderer';
import Function from '../../components/Function';

describe('Testing Function component', () => {
  const functions = {
    values: ['AC', '+/-', '%'],
    clickEventHandler: jest.fn(),
    id: 'unary-functions',
  };
  it('Testing with snapshot', () => {
    const tree = renderer.create(<Function functions={functions} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
