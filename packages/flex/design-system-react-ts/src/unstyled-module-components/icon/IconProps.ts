import { IconSize, IconStatus, IconPosition, TextIconMarkup, IconStatusPosition, IconColor } from './IconEnum'
import { IconName } from './IconNameEnum'
import { Stacked } from '../../objects/facets/Stacked'
import { ClickEvent } from '../../events/OnClickEvent'

type Styles = { [key: string]: unknown }

/**
 * Icon Interface
 */
export interface IconProps extends Stacked {
  name: IconName
  status?: IconStatus
  badgeContent?: string
  size?: IconSize
  circled?: boolean
  content?: any
  // content?: string | React.ReactNode
  position?: IconPosition
  markup?: TextIconMarkup
  statusPosition?: IconStatusPosition
  stretched?: boolean
  color?: IconColor
  onClick?: ClickEvent
  className?: string
  textClassName?: string
  style?: Styles
}
