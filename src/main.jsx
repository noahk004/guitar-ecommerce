import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import HomePage from './pages/home'
import ShopPage from './pages/shop'
import GuitarPage from './pages/guitar'
import AboutPage from './pages/about'
import CartPage from './pages/cart'

function App() {
  let [cart, setCart] = useState([0,2,0,0,1,0,0,1,0])
  const editCart = (index, value) => {
    const f = () => {
      let newCart = [...cart]
      newCart[index] += value
      setCart(newCart)
    }
    return f
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/shop/:index' element={<GuitarPage cart={cart} editCart={editCart} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop/cart' element={<CartPage cart={cart} editCart={editCart} />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
