import { useCoinsContext } from '../../hooks/context/coinsContext';
import styles from './Header.module.scss';

export default function Header() {
    const { addCoin, search, searchText, currentSort, onSort } = useCoinsContext();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        search && search(e.target.value)
    }

    const handleCreate = () => {
        addCoin && addCoin()
    }

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onSort && onSort(e.target.value)
    }

    return (
        <div className={styles.header}>
            <div className={styles.inputGroup}>
                <input type='text' className={styles.search} name='search' placeholder='Search Coins' value={searchText} onInput={handleSearch} />
                <button className={styles.button} onClick={handleCreate}>Add Coin</button>
            </div>
            <div className="flex flex-row justify-between items-center gap-1">
                <label htmlFor="">Sort:</label>
                <select title='test' className={styles.select} value={currentSort} onChange={handleSortChange}>
                    <option value='name-asc'>Name ASC</option>
                    <option value='name-desc'>Name DESC</option>
                    <option value='price-asc'>Price Lowest to Highest</option>
                    <option value='price-desc'>Price Highest to Lowest</option>
                </select>
            </div>
        </div>
    )
}