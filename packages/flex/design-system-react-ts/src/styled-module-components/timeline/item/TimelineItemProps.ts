import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Timeline Item Interface
 */
export interface TimelineItemProps {
  children?: GenericChildren | string
  active?: boolean
}

/**
 * Timeline Item Web Interface
 */
export interface TimelineItemWebProps extends TimelineItemProps {
  className?: string
  classList?: string[]
}
