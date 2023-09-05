import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Timeline Content Interface
 */
export interface TimelineContentProps {
  children?: GenericChildren | string
  heading?: string
  content?: string
  link?: string
  contentLink?: string
}

/**
 * Timeline Content Web Interface
 */
export interface TimelineContentWebProps extends TimelineContentProps {
  className?: string
  classList?: string[]
}
