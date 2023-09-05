import { Fullwidth } from '../../objects/facets/Fullwidth'

/**
 * Footer Interface
 */
export interface FooterProps extends Fullwidth {
  children?: React.ReactNode | string
  desktop?: boolean
  mobile?: boolean
}

/**
 * Footer Web Interface
 */
export interface FooterWebProps extends FooterProps {
  className?: string
}
