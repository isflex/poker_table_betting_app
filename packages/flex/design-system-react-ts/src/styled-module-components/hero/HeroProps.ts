import { VariantProps } from '../../objects/facets'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Hero Interface
 */
export interface HeroProps extends VariantProps {
  children?: GenericChildren | string
  backgroundSrc?: string
  className?: string
  classList?: string[]
}
