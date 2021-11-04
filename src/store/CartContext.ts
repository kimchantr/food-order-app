import { CartItem } from 'models'
import { createContext } from 'react'

export interface CartContextVal {
  items: CartItem[]
  totalAmount: number
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
}

const CartContext = createContext<CartContextVal>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
})

export default CartContext
