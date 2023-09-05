import { HiddenTouch } from '../../../objects/facets/Hidden'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar Extras Interface
 */
export interface NavbarExtrasProps extends HiddenTouch {
  children?: GenericChildren | string
}

/**
 * Navbar Extras Web Interface
 */
export interface NavbarExtrasWebProps extends NavbarExtrasProps {
  className?: string
  classList?: string[]
}
