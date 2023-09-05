import { IconName } from '../../icon/IconNameEnum'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Timeline Marker Interface
 */
export interface TimelineMarkerProps {
  children?: GenericChildren | string
  iconName: IconName
}

/**
 * Timeline Marker Web Interface
 */
export interface TimelineMarkerWebProps extends TimelineMarkerProps {
  className?: string
  classList?: string[]
  iconClassname?: string
}
