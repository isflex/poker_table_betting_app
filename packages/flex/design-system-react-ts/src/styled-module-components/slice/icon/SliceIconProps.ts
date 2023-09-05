import { IconColor, IconName, IconSize } from '../../icon'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface SliceIconProps {
  children?: GenericChildren | string
  className?: string
  classList?: string[]
  iconName: IconName
  iconSize?: IconSize
  iconColor?: IconColor
}
