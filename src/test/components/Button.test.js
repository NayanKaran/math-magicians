import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

describe('Testing Button component', () => {
  const buttonProp = { onClick: jest.fn(), value: 'AC' };

  it('Testing with snapshot', () => {
    const tree = renderer.create(<Button buttonProp={buttonProp} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Testing clickEvent', () => {
    render(<Button buttonProp={buttonProp} />);
    fireEvent.click(screen.getByText(buttonProp.value));
    expect(buttonProp.onClick).toHaveBeenCalledTimes(1);
  });
});
