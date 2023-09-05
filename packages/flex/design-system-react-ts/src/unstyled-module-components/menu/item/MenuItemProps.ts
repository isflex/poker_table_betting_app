import { ClickEvent } from '../../../events/OnClickEvent'
import { IconName } from './../../icon/IconNameEnum'
/**
 * Menu Item Interface
 */
export interface MenuItemProps {
  children?: React.ReactNode | string
  disabled?: boolean
  active?: boolean
  onClick?: ClickEvent
}

/**
 * Menu Item Web Interface
 */
export interface MenuItemWebProps extends MenuItemProps {
  to?: string
  className?: string
  arrow?: boolean
  badge?: string | number
  icon?: IconName
}
