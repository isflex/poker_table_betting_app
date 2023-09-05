import { ClickEvent } from '../../../events/OnClickEvent'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar link Interface
 */
export interface NavbarLinkProps {
  children?: GenericChildren | string
  content?: string
  to?: string
  href?: string
  highlighted?: boolean
  onClick?: ClickEvent
}

/**
 * Navbar link Web Interface
 */
export interface NavbarLinkWebProps extends NavbarLinkProps {
  className?: string
  classList?: string[]
}
