import { ClickEvent } from '../../events/OnClickEvent'
import { Centerable } from '../../objects/facets/Centerable'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Tabs Interface
 */
export interface TabsProps extends Centerable {
  children?: GenericChildren | string
  onClick?: ClickEvent
  disabled?: boolean
  activeIndex?: number
  rightAlign?: boolean
  clipped?: boolean
  fullwidth?: boolean
  className?: string
  classList?: string[]
}
