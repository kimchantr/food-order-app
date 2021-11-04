import mealImg from 'assets/meals.jpg'
import { CartButton } from 'components/cart'
import styles from './Header.module.css'

export interface HeaderProps {
  onShowCart: () => void
}

export function Header({ onShowCart }: HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <CartButton onClick={onShowCart} />
      </header>

      <div className={styles['main-image']}>
        <img src={mealImg} alt="A table full of delicious food!" />
      </div>
    </>
  )
}
