/**
 * Timeline Item Interface
 */
export interface TimelineItemProps {
  children?: React.ReactNode | string
  active?: boolean
}

/**
 * Timeline Item Web Interface
 */
export interface TimelineItemWebProps extends TimelineItemProps {
  className?: string
}
