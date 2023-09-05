import { BadgeTextDirection } from './BadgeEnum'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Badge Interface
 */
export interface BadgeProps {
  children?: string | number
  content?: string | number
  textContent?: GenericChildren | string
  direction?: BadgeTextDirection
  className?: string
  classList?: string[]
}
