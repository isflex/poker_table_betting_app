import { HiddenTouch } from '../../../objects/facets/Hidden'

/**
 * Navbar Menu Interface
 */
export interface NavbarMenuProps extends HiddenTouch {
  children?: React.ReactNode | string
  newNavbar?: boolean
}

/**
 * Navbar Menu Web Interface
 */
export interface NavbarMenuWebProps extends NavbarMenuProps {
  className?: string
}
