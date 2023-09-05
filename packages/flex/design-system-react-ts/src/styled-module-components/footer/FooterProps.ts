import { Fullwidth } from '../../objects/facets/Fullwidth'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Footer Interface
 */
export interface FooterProps extends Fullwidth {
  children?: GenericChildren | string
  desktop?: boolean
  mobile?: boolean
}

/**
 * Footer Web Interface
 */
export interface FooterWebProps extends FooterProps {
  className?: string
  classList?: string[]
}
