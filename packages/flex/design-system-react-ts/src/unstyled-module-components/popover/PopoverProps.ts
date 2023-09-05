import { PopoverArrowPosition, PopoverDirection } from './PopoverEnum'

/**
 * Popover Interface
 */
export interface PopoverProps {
  children?: React.ReactNode | string
  direction?: PopoverDirection
  active?: boolean
  content?: React.ReactNode | string
  arrowPosition?: PopoverArrowPosition
}

/**
 * Popover Web Interface
 */
export interface PopoverWebProps extends PopoverProps {
  className?: string
}
