import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Select Option Interface
 */
export interface SelectOptionProps {
  children?: string
  selected?: boolean
  label?: string
  value?: string
  className?: string
  classList?: string[]
  id?: string
  disabled?: boolean
}
