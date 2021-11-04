import styles from './CartItem.module.css'

export interface CartItemProps {
  name: string
  amount: number
  price: number

  onAdd: () => void
  onRemove: () => void
}

export function CartItem({ amount, name, onAdd, onRemove, price }: CartItemProps) {
  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{name}</h2>

        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  )
}
