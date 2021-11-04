import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

export interface BackdropProps {
  onClose: () => void
}

export interface ModalOverlayProps {
  children: ReactNode
}

export interface ModalProps {
  children: ReactNode
  onClose: () => void
}

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={styles.backdrop} onClick={onClose} />
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlay') as HTMLElement

export function Modal({ children, onClose }: ModalProps) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  )
}
