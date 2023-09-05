import { HiddenTouch } from '../../../objects/facets/Hidden'

/**
 * Navbar Extras Interface
 */
export interface NavbarExtrasProps extends HiddenTouch {
  children?: React.ReactNode | string
}

/**
 * Navbar Extras Web Interface
 */
export interface NavbarExtrasWebProps extends NavbarExtrasProps {
  className?: string
}
