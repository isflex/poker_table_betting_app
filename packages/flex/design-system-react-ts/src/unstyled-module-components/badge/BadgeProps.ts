import { BadgeTextDirection } from './BadgeEnum'

/**
 * Badge Interface
 */
export interface BadgeProps {
  children?: React.ReactNode | string
  content?: string | number
  textContent?: string
  direction?: BadgeTextDirection
  className?: string
}
