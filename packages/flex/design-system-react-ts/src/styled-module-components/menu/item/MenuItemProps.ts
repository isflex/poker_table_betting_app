import { ClickEvent } from '../../../events/OnClickEvent'
import { IconName } from './../../icon/IconNameEnum'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Menu Item Interface
 */
export interface MenuItemProps {
  children?: GenericChildren | string
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
  classList?: string[]
  arrow?: boolean
  badge?: string | number
  icon?: IconName
}
