import { render, screen } from '@testing-library/react';
import Loader from '../Loader';
import { useTranslation } from 'react-i18next';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

describe('Loader Component', () => {
  beforeEach(() => {
    (useTranslation as jest.Mock).mockReturnValue({
      t: (key: string) => key === 'loader' ? 'Loading...' : key,
    });
  });

  test('should render the spinner and the translated text', () => {
    render(<Loader />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();

    const translatedText = screen.getByText('Loading...');
    expect(translatedText).toBeInTheDocument();
  });
});
