import { PopoverArrowPosition, PopoverDirection } from './PopoverEnum'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Popover Interface
 */
export interface PopoverProps {
  children?: GenericChildren | string
  direction?: PopoverDirection
  active?: boolean
  content?: React.ReactNode
  arrowPosition?: PopoverArrowPosition
}

/**
 * Popover Web Interface
 */
export interface PopoverWebProps extends PopoverProps {
  className?: string
  classList?: string[]
}
