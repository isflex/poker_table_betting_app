import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Footer Wrapper Interface
 */
export interface FooterWrapperProps {
  children?: GenericChildren | string
}

/**
 * Footer Wrapper Web Interface
 */
export interface FooterWrapperWebProps extends FooterWrapperProps {
  className?: string
  classList?: string[]
}
