import BlogCard from "../blogCard";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Blog Card', () => {
    const mockOnEdit = jest.fn();
    const mockOnDelete = jest.fn();

    const blogCard = {
        image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
        title: 'Test Blog Title',
        description: 'Test Blog Description',
        onEdit: mockOnEdit,
        onDelete: mockOnDelete,
    };

    test('renders correct content of Blog Card ', () => {
        render(<BlogCard {...blogCard} />)

        expect(screen.getByText('Test Blog Title')).toBeInTheDocument();
        expect(screen.getByText('Test Blog Description')).toBeInTheDocument();
        const imageElement = screen.getByAltText('Test Blog Title');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg');
    })

    test('calls onEdit when Edit Icon is clicked', () => {
        render(<BlogCard {...blogCard} />)
        const editIcon = screen.getByAltText('Edit Icon')
        fireEvent.click(editIcon);
        expect(mockOnEdit).toHaveBeenCalledTimes(1);
    })

    test('calls onDelete when Delete Icon is clicked', () => {
        render(<BlogCard {...blogCard} />)
        const deleteIcon = screen.getByAltText('Delete Icon')
        fireEvent.click(deleteIcon);
        expect(mockOnEdit).toHaveBeenCalledTimes(1);
    })

})