import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../HomePage';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

jest.mock('react-router-dom', () => ({
  useLoaderData: jest.fn(),
  useNavigate: jest.fn(),
}));
jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

describe('Home', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useLoaderData as jest.Mock).mockReturnValue({
      blogs: [
        { id: '1', image: 'image1.jpg', title: 'Java Scripts', description: 'Java Scripts' },
        { id: '2', image: 'image2.jpg', title: 'Type Scripts', description: 'Type Scripts' },
      ],
      language: 'en',
    });
    (useTranslation as jest.Mock).mockReturnValue({
      t: (key: string) => key,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the page title and blogs', () => {
    render(<Home />);
    expect(screen.getByText('mainTitle')).toBeInTheDocument();
    expect(screen.getByText('Java Scripts')).toBeInTheDocument();
    expect(screen.getByText('Java Scripts')).toBeInTheDocument();
  });

  test('navigates to edit page on edit button click', () => {
    render(<Home />);
    const editButton = screen.getAllByText('Edit')[0]; 
    fireEvent.click(editButton);

    expect(mockNavigate).toHaveBeenCalledWith('/add-blog', {
      state: { blogData: { id: '1', image: 'image1.jpg', title: 'Java Scripts', description: 'Java Scripts' } },
    });
  });
});
