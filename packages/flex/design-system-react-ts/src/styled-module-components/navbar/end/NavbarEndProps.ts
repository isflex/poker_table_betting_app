import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar End Interface
 */
export interface NavbarEndProps {
  children?: GenericChildren | string
}

/**
 * Navbar End Web Interface
 */
export interface NavbarEndWebProps extends NavbarEndProps {
  className?: string
  classList?: string[]
}
