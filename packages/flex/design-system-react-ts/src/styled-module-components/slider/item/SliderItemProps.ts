import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Slider Step Interface
 */

export interface SliderItemProps {
  children?: GenericChildren | string
  active?: boolean
  className?: string
  classList?: string[]
}
