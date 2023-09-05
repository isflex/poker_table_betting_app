import { IconName } from '../../icon/IconNameEnum'

/**
 * Timeline Marker Interface
 */
export interface TimelineMarkerProps {
  children?: React.ReactNode | string
  iconName: IconName
}

/**
 * Timeline Marker Web Interface
 */
export interface TimelineMarkerWebProps extends TimelineMarkerProps {
  className?: string
  iconClassname?: string
}
