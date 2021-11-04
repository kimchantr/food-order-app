import React from 'react'
import ReactDOM from 'react-dom'
import CartProvider from 'store/CartProvider'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
