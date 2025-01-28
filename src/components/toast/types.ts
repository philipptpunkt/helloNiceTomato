export type ToastType = 'info' | 'success' | 'warning' | 'error'
export type ToastPosition = 'top' | 'bottom'
export type ToastAlignment = 'left' | 'center' | 'right'

export interface Toast {
  id: string
  type: ToastType
  title: string
  description?: string
  position: ToastPosition
  alignment: ToastAlignment
}

export interface ToastContextType {
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}