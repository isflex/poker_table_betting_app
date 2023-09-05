import { HiddenMobile, HiddenTablet, HiddenDesktop } from '../../../objects/facets/Hidden'
import { NavbarItemMarkup } from './NavbarItemEnum'
import { Alternate } from '../../../objects/facets/Alternate'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar Item Interface
 */
export interface NavbarItemProps extends HiddenMobile, HiddenTablet, HiddenDesktop, Alternate {
  // children?: React.JSX.Element | React.JSX.Element[] | string | number
  children?: GenericChildren | string | number
  megaDropdown?: boolean
  hoverable?: boolean
  active?: boolean
}

/**
 * Navbar Item Web Interface
 */
export interface NavbarItemWebProps extends NavbarItemProps {
  className?: string
  classList?: string[]
  id?: string
  markup?: NavbarItemMarkup
}
