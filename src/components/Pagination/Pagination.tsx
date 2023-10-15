import { useMemo } from 'react';
import styles from './Pagination.module.scss'

type Props = {
    total: number
    currentPage: number
    nextLink?: string | null;
    prevLink?: string | null;
    onPageChange: (page: number) => void
}

export default function Pagination({ total, currentPage, nextLink, prevLink, onPageChange}: Props) {
    const showingText = useMemo(() => {
        const totalPage = Math.ceil(total / 10)
        if (totalPage === 1) {
            return `Showing ${total} out of ${total}`
        }
        if (currentPage === totalPage) {
            return `Showing ${total} out of ${total}`
        }
        return `Showing ${currentPage * 10} out of ${total}`
    }, [total, currentPage])
    return (
        <>
            {
                total > 10 &&
                (<div className={styles.paginationWrapper}>
                    <div>{showingText}</div>
                    <div className='flex flex-row gap-2'>
                        <button disabled={!prevLink} className={styles.paginationButton} onClick={() => onPageChange(currentPage - 1)}>Prev</button>
                        <button disabled={!nextLink} className={styles.paginationButton} onClick={() => onPageChange(currentPage + 1)}>Next</button>
                    </div>
                </div>)
            }
        </>
    )
}