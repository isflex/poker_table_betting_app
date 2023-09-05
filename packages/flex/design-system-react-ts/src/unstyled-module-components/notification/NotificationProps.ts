import { AlertProps } from '../../objects/facets'
import { IconName } from '../icon/IconNameEnum'
import { ClickEvent } from '../../events/OnClickEvent'
import { ButtonMarkup } from '../button'

/**
 * Notification Interface
 */
export interface NotificationProps extends AlertProps {
  children?: React.ReactNode | string
  iconName?: IconName
  title?: string
  description?: string
  buttonContent?: string
  buttonClick?: ClickEvent
  arrow?: boolean
  info?: boolean
  banner?: boolean
  className?: string
  iconClassname?: string
  buttonMarkup?: ButtonMarkup
}
