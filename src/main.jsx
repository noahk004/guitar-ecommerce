import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import ShopPage from './pages/shop'
import GuitarPage from './pages/guitar'
import LearnPage from './pages/learn'
import ContactPage from './pages/contact'
import SignInPage from './pages/sign-in'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/shop/:index' element={<GuitarPage />} />
        <Route path='/learn' element={<LearnPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
