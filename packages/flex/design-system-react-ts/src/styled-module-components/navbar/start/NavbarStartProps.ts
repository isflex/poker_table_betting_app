import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar Start Interface
 */
export interface NavbarStartProps {
  children?: GenericChildren | string
}

/**
 * Navbar Start Web Interface
 */
export interface NavbarStartWebProps extends NavbarStartProps {
  className?: string
  classList?: string[]
}
