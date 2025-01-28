import Pagination from "../pagination";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from "../../../../i18n";

describe('Pagination ', () => {
    const totalItems = 20;
    const blogsPerPage = 5;
    const onPageChangeMock = jest.fn();

    const renderPagination = () => 
        render(
            <I18nextProvider i18n={i18n} >
                <Pagination 
                    totalItems={totalItems}
                    blogsPerPage={blogsPerPage}
                    onPageChange={onPageChangeMock}
                />
            </I18nextProvider>

        );

    test('render Pagination Component ' , () =>{
        renderPagination();
        const pagination = screen.getByRole('navigation')
        expect(pagination).toBeInTheDocument();

    })

    test('display the correct number of pages ' , () =>{
        renderPagination();
        const pagesNumber = screen.getAllByRole('button')
        expect(pagesNumber.length).toBe(6);

    })

    test('call onPageChange with correct indices when a page is clicked' , () =>{
        renderPagination();
        const pagesButtons = screen.getAllByRole('button')
        fireEvent.click(pagesButtons[2]);
        expect(onPageChangeMock).toHaveBeenCalledWith(5, 10);
    })
})