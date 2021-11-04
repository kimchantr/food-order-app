import { useContext, useEffect, useState } from 'react'
import CartContext from 'store/CartContext'
import { CartIcon } from '..'
import styles from './CartButton.module.css'

export interface CartButtonProps {
  onClick: () => void
}

export function CartButton({ onClick }: CartButtonProps) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const { items } = useContext(CartContext)

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`
  const numberOfCartItems = items.reduce((total, item) => total + item.amount, 0)

  useEffect(() => {
    if (items.length === 0) {
      return
    }

    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>

      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}
