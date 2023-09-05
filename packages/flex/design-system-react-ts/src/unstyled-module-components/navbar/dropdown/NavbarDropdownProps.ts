/**
 * Navbar Dropdown Interface
 */
export interface NavbarDropdownProps {
  children?: React.ReactNode | string
}

/**
 * Navbar Dropdown Web Interface
 */
export interface NavbarDropdownWebProps extends NavbarDropdownProps {
  className?: string
}
