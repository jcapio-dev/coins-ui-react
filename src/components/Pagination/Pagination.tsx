import { useMemo } from 'react';
import styles from './Pagination.module.scss'

type Props = {
    total: number
    currentPage: number
    nextLink?: string | null;
    prevLink?: string | null;
    onPageChange: (page: number) => void
}

export default function Pagination({ total, currentPage, onPageChange}: Props) {
    const pageCount = useMemo(() => {
        return Math.ceil(total / 10)
    },[total])
    const showingText = useMemo(() => {
        const totalPage = Math.ceil(total / 10)
        // 1-6 of 6 results
        if (totalPage === 1) {
            return `1-${total} of ${total} results`
        }
        if (currentPage === totalPage) {
            return `${(currentPage - 1) * 10 + 1}-${total} of ${total} results`
        }
        return `${(currentPage - 1) * 10 + 1}-${currentPage * 10} of ${total} results`
    }, [total, currentPage])
    return (
        <>
            {
                total > 10 &&
                (<div className={styles.paginationWrapper}>
                    <div>{showingText}</div>
                    <div className='flex flex-row gap-2'>
                        <button disabled={currentPage === 1} className={styles.paginationButton} onClick={() => onPageChange(currentPage - 1)}>Prev</button>
                        <button disabled={currentPage === pageCount} className={styles.paginationButton} onClick={() => onPageChange(currentPage + 1)}>Next</button>
                    </div>
                </div>)
            }
        </>
    )
}