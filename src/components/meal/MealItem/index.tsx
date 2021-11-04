import { useContext } from 'react'
import CartContext from 'store/CartContext'
import { AddMealForm } from '../AddMealForm'
import styles from './MealItem.module.css'

export interface MealItemProps {
  name: string
  description: string
  id: string
  price: number
}

export function MealItem({ description, id, name, price }: MealItemProps) {
  const { addItem } = useContext(CartContext)

  const handleAddToCart = (amount: number) => {
    addItem({
      id,
      description,
      name,
      price,
      amount,
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>

        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
      </div>

      <div>
        <AddMealForm id={id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  )
}
