import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Footer Sub Interface
 */
export interface FooterSubProps {
  children?: GenericChildren | string
}

/**
 * Footer Sub Web Interface
 */
export interface FooterSubWebProps extends FooterSubProps {
  className?: string
  classList?: string[]
}
