import { ClickEvent } from '../../events/OnClickEvent'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Link Interface
 */
export interface LinkProps {
  children?: GenericChildren | string
  to?: string
  fixed?: boolean
  plain?: boolean
  tertiary?: boolean
  onClick?: ClickEvent
  className?: string
  classList?: string[]
  removeLinkClass?: boolean
  inverted?: boolean
  title?: string
  href?: string
  target?: string
  rel?: string
}
