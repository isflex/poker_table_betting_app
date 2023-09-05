import { CardImageSize } from './CardImageEnum'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Card Image Interface
 */
export interface CardImageProps {
  src: string
  size?: CardImageSize
  className?: string
  classList?: string[]
  alt?: string
}
