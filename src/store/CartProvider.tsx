import { CartItem } from 'models'
import { ReactNode, useState } from 'react'
import CartContext from './CartContext'

export interface CartProviderProps {
  children: ReactNode
}

function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<Array<CartItem>>([])
  const [totalAmount, setTotalAmount] = useState(0)

  const handleAddItemToCart = (item: CartItem) => {
    const index = items.findIndex((x) => x.id === item.id)
    const newItems = [...items]
    const newTotalAmount = totalAmount + item.amount * item.price

    if (index !== -1) {
      newItems[index] = {
        ...newItems[index],
        amount: newItems[index].amount + item.amount,
      }
    } else {
      newItems.push(item)
    }

    setItems(newItems)
    setTotalAmount(newTotalAmount)
  }

  const handleRemoveItemFromCart = (id: string) => {
    const index = items.findIndex((x) => x.id === id)
    const newItems = [...items]
    const newTotalAmount = totalAmount - items[index].price

    // if amount of current item = 1, remove it from cart
    // otherwise, decrease amount of it = 1
    if (newItems[index].amount === 1) {
      newItems.splice(index, 1)
    } else {
      newItems[index] = {
        ...newItems[index],
        amount: newItems[index].amount - 1,
      }
    }

    setItems(newItems)
    setTotalAmount(newTotalAmount)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        totalAmount,
        addItem: handleAddItemToCart,
        removeItem: handleRemoveItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
