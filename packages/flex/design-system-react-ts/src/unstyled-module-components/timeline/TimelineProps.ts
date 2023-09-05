/**
 * Timeline Interface
 */
export interface TimelineProps {
  children?: React.ReactNode | string
  notifications?: boolean
}

/**
 * Timeline Web Interface
 */
export interface TimelineWebProps extends TimelineProps {
  className?: string
}
