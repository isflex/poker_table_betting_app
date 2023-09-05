import { HiddenTouch } from '../../../objects/facets/Hidden'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar Menu Interface
 */
export interface NavbarMenuProps extends HiddenTouch {
  children?: GenericChildren | string
  newNavbar?: boolean
}

/**
 * Navbar Menu Web Interface
 */
export interface NavbarMenuWebProps extends NavbarMenuProps {
  className?: string
  classList?: string[]
}
