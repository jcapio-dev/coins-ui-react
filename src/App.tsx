import { useMemo } from 'react';
import './App.scss'
import Accordion from './components/Accordion/Accordion'
import Header from './components/Header/Header'
import { useCoinsContext } from './hooks/context/coinsContext'
import CoinDetails from './components/CoinDetails/CoinDetails';
import CoinAccordionTitle from './components/CoinAccordionTitle/CoinAccordionTitle';
import Pagination from './components/Pagination/Pagination';

function App() {
  const { listData, setCurrentPage, currentPage } = useCoinsContext();
  const items = useMemo(() => {
    return listData ? listData.rows.map((coin) => ({
      title: (<CoinAccordionTitle coin={coin} />),
      content: (<CoinDetails coin={coin} />)
    })) : []
  }, [listData])

  const handlePageChange = (page: number) => {
    setCurrentPage && setCurrentPage(page)
  }

  return (
    <>
      <Header />
      <Accordion items={items}/>
      <Pagination 
        total={listData?.totalCount || 0}
        currentPage={currentPage || 1}
        nextLink={listData?.nextPage}
        prevLink={listData?.previousPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default App
