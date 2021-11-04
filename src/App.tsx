import { CartList } from 'components/cart'
import { Header } from 'components/layout'
import React, { useState } from 'react'

function App() {
  const [cartIsShown, setCartIsShown] = useState(true)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <>
      {cartIsShown && <CartList onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
    </>
  )
}

export default App
