import { ClickEvent } from '../../events/OnClickEvent'

export enum BoxMarkup {
  DIV = 'div',
  A = 'a',
}

/**
 * Box Interface
 */
export interface BoxProps {
  children?: React.ReactNode | string
  skeleton?: boolean
  className?: string
  onClick?: ClickEvent
  markup?: BoxMarkup
  to?: string
}
