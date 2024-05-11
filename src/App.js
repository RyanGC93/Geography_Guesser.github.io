import './styles.css'
import LandingPage from './components/LandingPage/LandingPage'
import React, {  Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
        <Fragment>
          <Routes>
           <Route path="*" element={<LandingPage />} />
          </Routes>
        </Fragment>
    </BrowserRouter>
  )
}
