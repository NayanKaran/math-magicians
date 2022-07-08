import renderer from 'react-test-renderer';
import Display from '../../components/Display';

describe('Testing Display component', () => {
  it('Testing with snapshot', () => {
    const data = {
      total: null,
      next: null,
      operation: null,
    };

    const tree = renderer.create(<Display data={data} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
