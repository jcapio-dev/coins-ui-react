import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

describe('Pagination', () => {
    const onPageChange = jest.fn();

    it('renders the correct showing text', () => {
        const { getByText } = render(<Pagination total={20} currentPage={2} onPageChange={onPageChange} />);
        expect(getByText('Showing 20 out of 20')).toBeInTheDocument();
    });

    it('renders the correct showing text when on the last page', () => {
        const { getByText } = render(<Pagination total={25} currentPage={3} onPageChange={onPageChange} />);
        expect(getByText('Showing 25 out of 25')).toBeInTheDocument();
    });

    it('renders the correct showing text when there is only one page', () => {
        const { getByText } = render(<Pagination total={11} currentPage={1} onPageChange={onPageChange} />);
        expect(getByText('Showing 10 out of 11')).toBeInTheDocument();
    });

    it('renders the Prev and Next buttons when there are more than 10 items', () => {
        const { getByText } = render(<Pagination total={15} currentPage={1} onPageChange={onPageChange} />);
        expect(getByText('Prev')).toBeInTheDocument();
        expect(getByText('Next')).toBeInTheDocument();
    });

    it('does not render the Prev and Next buttons when there are 10 or fewer items', () => {
        const { queryByText } = render(<Pagination total={10} currentPage={1} onPageChange={onPageChange} />);
        expect(queryByText('Prev')).toBeNull();
        expect(queryByText('Next')).toBeNull();
    });

    it('calls onPageChange with the correct page number when Prev button is clicked', () => {
        const { getByText } = render(<Pagination total={20} currentPage={2} onPageChange={onPageChange} />);
        fireEvent.click(getByText('Prev'));
        expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it('calls onPageChange with the correct page number when Next button is clicked', () => {
        const { getByText } = render(<Pagination total={20} currentPage={1} onPageChange={onPageChange} />);
        fireEvent.click(getByText('Next'));
        expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it('disables the Prev button when on the first page', () => {
        const { getByText } = render(<Pagination total={20} currentPage={1} onPageChange={onPageChange} />);
        const prevButton = getByText('Prev');
        expect(prevButton).toBeDisabled();
    });

    it('disables the Next button when on the last page', () => {
        const { getByText } = render(<Pagination total={20} currentPage={2} onPageChange={onPageChange} />);
        const nextButton = getByText('Next');
        expect(nextButton).toBeDisabled();
    });
});
