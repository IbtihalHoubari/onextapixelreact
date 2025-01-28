import { render,screen, fireEvent } from '@testing-library/react';
import EditIcon from '../editIcon';
import '@testing-library/jest-dom';

describe('Edit icon', () => {
  test('render the edit icon', () => {
    render(<EditIcon onClick={() => {}} />);
    const editIcon = screen.getByAltText('Edit Icon');
    expect(editIcon).toBeInTheDocument();
  });

  test('call onClick when the icon is clicked', () => {
    const onClickMock = jest.fn();
    render(<EditIcon onClick={onClickMock} />);
    const editIcon = screen.getByAltText('Edit Icon');
    
    fireEvent.click(editIcon);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});