import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Card Interface
 */
export interface CardProps {
  children?: GenericChildren | string
  flat?: boolean
  horizontal?: boolean
  floating?: boolean
  skeleton?: boolean
  className?: string
  classList?: string[]
}
