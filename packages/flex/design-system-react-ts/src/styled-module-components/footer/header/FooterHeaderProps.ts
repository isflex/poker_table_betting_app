import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Footer Header Interface
 */
export interface FooterHeaderProps {
  children?: GenericChildren | string
}

/**
 * Footer Header Web Interface
 */
export interface FooterHeaderWebProps extends FooterHeaderProps {
  className?: string
  classList?: string[]
}
