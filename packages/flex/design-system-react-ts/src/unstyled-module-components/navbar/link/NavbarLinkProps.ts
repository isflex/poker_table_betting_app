import { ClickEvent } from '../../../events/OnClickEvent'

/**
 * Navbar link Interface
 */
export interface NavbarLinkProps {
  children?: React.ReactNode | string
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
}
