import { Header } from 'components/layout'
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
      <Header onShowCart={showCartHandler} />
    </>
  )
}

export default App
