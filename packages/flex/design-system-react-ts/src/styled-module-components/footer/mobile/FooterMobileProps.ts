import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Footer Mobile Interface
 */
export interface FooterMobileProps {
  children?: GenericChildren | string
}

/**
 * Footer Web Interface
 */
export interface FooterMobileWebProps extends FooterMobileProps {
  className?: string
  classList?: string[]
}
