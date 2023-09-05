import { VariantProps } from '../../objects/facets'

/**
 * Hero Interface
 */
export interface HeroProps extends VariantProps {
  children?: React.ReactNode | string
  backgroundSrc?: string
  className?: string
}
