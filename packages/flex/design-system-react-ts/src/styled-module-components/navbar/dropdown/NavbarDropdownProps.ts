import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar Dropdown Interface
 */
export interface NavbarDropdownProps {
  children?: GenericChildren | string
}

/**
 * Navbar Dropdown Web Interface
 */
export interface NavbarDropdownWebProps extends NavbarDropdownProps {
  className?: string
  classList?: string[]
}
