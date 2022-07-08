import renderer from 'react-test-renderer';
import Quote from '../../pages/Quote';

describe('Testing Quote component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
