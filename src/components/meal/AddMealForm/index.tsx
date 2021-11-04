import { Input } from 'components/common'
import { FormEvent, useRef, useState } from 'react'
import styles from './AddMealForm.module.css'

export interface AddMealFormProps {
  id: string
  onAddToCart: (amount: number) => void
}

export function AddMealForm({ id, onAddToCart }: AddMealFormProps) {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const amount = amountInputRef.current?.value
    const amountNumber = Number(amount)

    if (amount?.trim().length === 0 || amountNumber < 1 || amountNumber > 5) {
      setAmountIsValid(false)
      return
    }

    onAddToCart(amountNumber)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>

      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}
