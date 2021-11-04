import { CartList } from 'components/cart'
import { Header } from 'components/layout'
import { MealList, MealSummary } from 'components/meal'
import React, { useState } from 'react'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

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

      <main>
        <MealSummary />
        <MealList />
      </main>
    </>
  )
}

export default App
