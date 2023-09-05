import { ClickEvent } from '../../events/OnClickEvent'

/**
 * Link Interface
 */
export interface LinkProps {
  children?: React.ReactNode | string
  to?: string
  fixed?: boolean
  plain?: boolean
  tertiary?: boolean
  onClick?: ClickEvent
  className?: string
  removeLinkClass?: boolean
  title?: string
  href?: string
}
