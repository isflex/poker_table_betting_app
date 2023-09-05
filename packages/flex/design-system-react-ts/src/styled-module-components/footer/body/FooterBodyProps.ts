import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Footer Body Interface
 */
export interface FooterBodyProps {
  children?: GenericChildren | string
}

/**
 * Footer Body Web Interface
 */
export interface FooterBodyWebProps extends FooterBodyProps {
  className?: string
  classList?: string[]
}
