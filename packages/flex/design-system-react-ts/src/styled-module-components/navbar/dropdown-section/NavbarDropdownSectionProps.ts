import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar Dropdown Section Interface
 */
export interface NavbarDropdownSectionProps {
  children?: GenericChildren | string
  extras?: boolean
}

/**
 * Navbar Dropdown Section Web Interface
 */
export interface NavbarDropdownSectionWebProps extends NavbarDropdownSectionProps {
  className?: string
  classList?: string[]
}
