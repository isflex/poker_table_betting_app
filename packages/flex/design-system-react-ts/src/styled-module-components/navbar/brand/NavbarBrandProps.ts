import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar Brand Interface
 */
export interface NavbarBrandProps {
  children?: GenericChildren | string
}

/**
 * Navbar Brand Web Interface
 */
export interface NavbarBrandWebProps extends NavbarBrandProps {
  className?: string
  classList?: string[]
}
