import { PropsWithChildren, createContext, useContext, useMemo, useState } from "react";
import { Coins } from "../../types/Coins";
import coinsApiSlice, { useGetAllCoinsQuery, useCreateCoinMutation } from "../../redux/api/coinsApiSlice";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";

type ListData = {
    rows: Coins[]
    totalCount: number
    nextPage: string | null
    previousPage: string | null
}

type CoinsState = {
    listData: ListData
    searchText: string
    createCoin: (coin: Coins) => void
    addCoin: () => void
    search: (coin: string) => void
    deleteCoin: (symbol: string) => void
    currentSort: string
    onSort: (sort: string) => void
    refreshCoin: (id: string) => void
    setCurrentPage: (page: number) => void
    currentPage: number
}

export const CoinsContext = createContext<Partial<CoinsState>>({
    searchText: '',
})

export function CoinsContextProvider({ children }: PropsWithChildren) {
    const dispatch = useDispatch()
    const [triggerCreate] = useCreateCoinMutation();
    //  search, searchText
    const [searchText, setSearchText] = useState<string>('')
    const [currentSort, setCurrenSort] = useState<string>('name-asc')
    const [currentPage, setCurrentPage] = useState<number>(1)
    const { data } = useGetAllCoinsQuery({searchText, currentPage, currentSort});
    const listData = useMemo(() => {
        return {
            rows: data?.data || [],
            totalCount: data?.total || 0,
            nextPage: data?.next_page_url,
            previousPage: data?.prev_page_url,
        }
    }, [data])

    const handleCreate = () => { 
        triggerCreate(searchText)
    }

    const handleSearch = (coin: string) => {
        setCurrentPage(1)
        setSearchText(coin)
    }

    const handleDelete = (id: string) => {
        dispatch(coinsApiSlice.endpoints.deleteCoin.initiate(id) as unknown as AnyAction)
    }

    const handleSort = (sort: string) => {
        setCurrenSort(sort)
    }

    const handleRefresh = (id: string) => {
        dispatch(coinsApiSlice.endpoints.refreshCoin.initiate(id) as unknown as AnyAction)
    }

    return (
        <CoinsContext.Provider value={{
            listData,
            search: handleSearch,
            searchText,
            createCoin: handleCreate,
            addCoin: handleCreate,
            deleteCoin: handleDelete,
            currentSort,
            onSort: handleSort,
            refreshCoin: handleRefresh,
            setCurrentPage,
            currentPage
        }}>
            {children}
        </CoinsContext.Provider>
    )
}

export const useCoinsContext = () => useContext(CoinsContext);