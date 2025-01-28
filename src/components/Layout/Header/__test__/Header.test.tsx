import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from "../../../../i18n";

describe('Footer ', () => {
    test('renders the logo icons', () => {
        render(
            <BrowserRouter>
                <I18nextProvider i18n={i18n} >
                    <Header />
                </I18nextProvider>
            </BrowserRouter>
        )

        const logo = screen.getByAltText('onextrapixel logo')
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', './src/assets/img/onextralogo.png');
    })

    test('renders Navigation links', () => {
        render(
            <BrowserRouter>
                <I18nextProvider i18n={i18n} >
                    <Header />
                </I18nextProvider>
            </BrowserRouter>
        )
        const homeLink = screen.getByText('Home')
        const addNewBlogLink = screen.getByText('Add New Blog')

        expect(homeLink).toBeInTheDocument();
        expect(addNewBlogLink).toBeInTheDocument();

    })
    test('change the language ', () => {
        render(
            <BrowserRouter>
                <I18nextProvider i18n={i18n} >
                    <Header />
                </I18nextProvider>
            </BrowserRouter>
        )
        const language = screen.getByRole('combobox')
        fireEvent.change(language, { target: { value: 'ar' } })
        expect(document.documentElement.dir).toBe('rtl');
        expect(language).toHaveValue('ar')

    })
})