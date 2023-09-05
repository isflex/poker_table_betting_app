/**
 * Timeline Content Interface
 */
export interface TimelineContentProps {
  children?: React.ReactNode | string
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
}
