import { Fullwidth } from '../../../objects/facets/Fullwidth'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Footer Desktop Interface
 */
export interface FooterDesktopProps extends Fullwidth {
  children?: GenericChildren | string
}

/**
 * Footer Desktop Web Interface
 */
export interface FooterDesktopWebProps extends FooterDesktopProps {
  className?: string
  classList?: string[]
}
