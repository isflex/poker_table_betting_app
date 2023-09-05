import { AlertProps } from '../../objects/facets'
import { IconName } from '../icon/IconNameEnum'
import { ClickEvent } from '../../events/OnClickEvent'
import { ButtonMarkup } from '../button'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Notification Interface
 */
export interface NotificationProps extends AlertProps {
  children?: GenericChildren | string
  iconName?: IconName
  title?: string
  description?: string
  buttonContent?: string
  buttonClick?: ClickEvent
  arrow?: boolean
  info?: boolean
  banner?: boolean
  className?: string
  classList?: string[]
  iconClassname?: string
  buttonMarkup?: ButtonMarkup
}
