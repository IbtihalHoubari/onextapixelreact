import { render,screen, fireEvent } from '@testing-library/react';
import DeleteIcon from '../deleteIcon';
import '@testing-library/jest-dom';

describe('Delete Icon', () => {
  test('should render the delete icon', () => {
    render(<DeleteIcon onClick={() => {}} />);
    const deleteIcon = screen.getByAltText('Delete Icon');
    expect(deleteIcon).toBeInTheDocument();
  });

  test('should call onClick when the icon is clicked', () => {
    const onClickMock = jest.fn();
    render(<DeleteIcon onClick={onClickMock} />);
    const deleteIcon = screen.getByAltText('Delete Icon');
    
    fireEvent.click(deleteIcon);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});