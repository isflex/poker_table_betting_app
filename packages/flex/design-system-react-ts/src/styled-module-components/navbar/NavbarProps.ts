import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar Interface
 */
export interface NavbarProps {
  children?: GenericChildren | string
  newNavbar?: boolean
  npmNavbar?: boolean
}

/**
 * Navbar Web Interface
 */
export interface NavbarWebProps extends NavbarProps {
  className?: string
  classList?: string[]
}
