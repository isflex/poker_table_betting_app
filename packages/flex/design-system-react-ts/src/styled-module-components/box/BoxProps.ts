import { ClickEvent } from '../../events/OnClickEvent'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

export enum BoxMarkup {
  DIV = 'div',
  A = 'a',
}

/**
 * Box Interface
 */
export interface BoxProps {
  children?: GenericChildren | string
  skeleton?: boolean
  className?: string
  classList?: string[]
  onClick?: ClickEvent
  markup?: BoxMarkup
  to?: string
}
