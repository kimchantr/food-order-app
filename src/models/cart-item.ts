import { Meal } from 'models'

export interface CartItem extends Meal {
  amount: number
}
