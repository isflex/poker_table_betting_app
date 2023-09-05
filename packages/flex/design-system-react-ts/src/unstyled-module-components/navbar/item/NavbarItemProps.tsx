import { HiddenMobile, HiddenTablet, HiddenDesktop } from '../../../objects/facets/Hidden'
import { NavbarItemMarkup } from './NavbarItemEnum'
import { Alternate } from '../../../objects/facets/Alternate'

/**
 * Navbar Item Interface
 */
export interface NavbarItemProps extends HiddenMobile, HiddenTablet, HiddenDesktop, Alternate {
  children?: React.ReactNode
  megaDropdown?: boolean
  hoverable?: boolean
  active?: boolean
}

/**
 * Navbar Item Web Interface
 */
export interface NavbarItemWebProps extends NavbarItemProps {
  className?: string
  id?: string
  markup?: NavbarItemMarkup
}
