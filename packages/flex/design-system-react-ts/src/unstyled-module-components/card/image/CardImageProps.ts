import { CardImageSize } from './CardImageEnum'

/**
 * Card Image Interface
 */
export interface CardImageProps {
  src: string
  size?: CardImageSize
  className?: string
  alt?: string
}
