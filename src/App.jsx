import React, { Suspense } from 'react'
import MainInterface from './Pages/mainInterface/MainInterface'
import './style.css'
import { CssBaseline } from '@mui/material'
const App = () => {
  return (
    <>
      <Suspense fallback={<div />}>
        <CssBaseline />
        <MainInterface />
      </Suspense>
    </>
  )
}

export default App
