import { forwardRef, HTMLProps } from 'react'
import styles from './Input.module.css'

export interface InputProps {
  label: string
  input: HTMLProps<HTMLInputElement>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ input, label }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>

      <input ref={ref} {...input} />
    </div>
  )
})
