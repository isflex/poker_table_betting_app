import { IconColor, IconName, IconSize } from '../../icon'

export interface SliceIconProps {
  children?: React.ReactNode | string
  className?: string
  iconName: IconName
  iconSize?: IconSize
  iconColor?: IconColor
}
