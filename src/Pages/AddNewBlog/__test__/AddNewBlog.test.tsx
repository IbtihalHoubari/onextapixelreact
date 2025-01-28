import { render, screen, fireEvent } from '@testing-library/react';
import AddNewBlog from '../AddNewBlog';
import { useForm } from 'react-hook-form';
import BlogsServices from '../../../services/blogs-service';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

jest.mock('react-hook-form', () => ({
    useForm: jest.fn(),
}));
jest.mock('blogs-service', () => ({
    addBlog: jest.fn(),
    updateBlog: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
    useLocation: jest.fn(),
}));
jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(),
}));

describe('AddNewBlog Component', () => {
    let mockNavigate: jest.Mock;
    let mockLocation: jest.Mock;
    let mockUseForm: jest.Mock;

    beforeEach(() => {
        mockNavigate = jest.fn();
        mockLocation = jest.fn(() => ({ state: {} }));
        mockUseForm = jest.fn(() => ({
            register: jest.fn(),
            handleSubmit: jest.fn((cb) => cb),
            formState: { errors: {} },
            setValue: jest.fn(),
            reset: jest.fn(),
        }));

        (useNavigate as jest.Mock).mockImplementation(mockNavigate);
        (useLocation as jest.Mock).mockImplementation(mockLocation);
        (useForm as jest.Mock).mockImplementation(mockUseForm);
        (useTranslation as jest.Mock).mockReturnValue({
            t: (key: string) => key,
            i18n: { language: 'en' },
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should render all form fields and submit button', () => {
        render(<AddNewBlog />);
        expect(screen.getByLabelText('imageLabel:')).toBeInTheDocument();
        expect(screen.getByLabelText('titleLabel')).toBeInTheDocument();
        expect(screen.getByLabelText('descriptionLabel')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'submitButton' })).toBeInTheDocument();
    });

    test('should call addBlog on form submission when no blogData is provided', async () => {
        (BlogsServices.addBlog as jest.Mock).mockResolvedValue({});
        render(<AddNewBlog />);
        const submitButton = screen.getByRole('button', { name: 'submitButton' });

        fireEvent.click(submitButton);

        expect(BlogsServices.addBlog).toHaveBeenCalledWith('en', expect.any(Object));
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    test('should display validation errors for invalid input', async () => {
        mockUseForm.mockReturnValueOnce({
            register: jest.fn(),
            handleSubmit: jest.fn(),
            formState: { errors: { title: { message: 'Title is required' } } },
            setValue: jest.fn(),
            reset: jest.fn(),
        });
        render(<AddNewBlog />);
        expect(screen.getByText('Title is required')).toBeInTheDocument();
    });

})  