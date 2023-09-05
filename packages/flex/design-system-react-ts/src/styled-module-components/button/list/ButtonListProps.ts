import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Button List Interface
 */
export interface ButtonListProps {
  children?: GenericChildren | string
}

/**
 * Button List Web Interface
 */
export interface ButtonListWebProps extends ButtonListProps {
  className?: string
  classList?: string[]
}
