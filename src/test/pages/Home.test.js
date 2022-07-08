import renderer from 'react-test-renderer';
import Home from '../../pages/Home';

describe('Testing Home component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
