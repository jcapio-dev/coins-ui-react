import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CoinsContextProvider } from './hooks/context/coinsContext.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import baseAPISlice from './redux/api/baseApiSlice.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={baseAPISlice}>
      <CoinsContextProvider>
        <App />
      </CoinsContextProvider>
    </ApiProvider>
  </React.StrictMode>,
)
