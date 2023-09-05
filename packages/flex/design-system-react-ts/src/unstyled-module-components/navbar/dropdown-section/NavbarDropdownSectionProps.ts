/**
 * Navbar Dropdown Section Interface
 */
export interface NavbarDropdownSectionProps {
  children?: React.ReactNode | string
  extras?: boolean
}

/**
 * Navbar Dropdown Section Web Interface
 */
export interface NavbarDropdownSectionWebProps extends NavbarDropdownSectionProps {
  className?: string
}
