import { Fullwidth } from '../../../objects/facets/Fullwidth'

/**
 * Footer Desktop Interface
 */
export interface FooterDesktopProps extends Fullwidth {
  children?: React.ReactNode | string
}

/**
 * Footer Desktop Web Interface
 */
export interface FooterDesktopWebProps extends FooterDesktopProps {
  className?: string
}
