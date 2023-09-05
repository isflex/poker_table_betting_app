/**
 * Navbar Interface
 */
export interface NavbarProps {
  children?: React.ReactNode | string
  newNavbar?: boolean
  npmNavbar?: boolean
}

/**
 * Navbar Web Interface
 */
export interface NavbarWebProps extends NavbarProps {
  className?: string
}
