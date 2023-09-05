import { ClickEvent } from '../../events/OnClickEvent'
import { Centerable } from '../../objects/facets/Centerable'

/**
 * Tabs Interface
 */
export interface TabsProps extends Centerable {
  children?: React.ReactNode | string
  onClick?: ClickEvent
  disabled?: boolean
  activeIndex?: number
  rightAlign?: boolean
  clipped?: boolean
  fullwidth?: boolean
  className?: string
}
