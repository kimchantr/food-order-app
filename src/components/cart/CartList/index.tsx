import { Modal } from 'components/common'
import { CartItem as CartItemModel } from 'models'
import { useContext } from 'react'
import CartContext from 'store/CartContext'
import { CartItem } from '..'
import styles from './CartList.module.css'

export interface CartListProps {
  onClose: () => void
}

export function CartList({ onClose }: CartListProps) {
  const { totalAmount, items, removeItem, addItem } = useContext(CartContext)

  const totalAmountNum = `$${totalAmount.toFixed(2)}`

  const handleCartItemRemove = (id: string) => {
    removeItem(id)
  }

  const handleCartItemAdd = (item: CartItemModel) => {
    addItem({ ...item, amount: 1 })
  }

  const cartItems = (
    <ul className={styles['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={() => handleCartItemRemove(item.id)}
          onAdd={() => handleCartItemAdd(item)}
        />
      ))}
    </ul>
  )

  return (
    <Modal onClose={onClose}>
      {cartItems}

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmountNum}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>

        {items.length > 0 && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  )
}
