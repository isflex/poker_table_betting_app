import { AlertProps } from '../../../objects/facets/Alert'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Progress Radial Interface
 */
export interface ProgressRadialProps extends AlertProps {
  children?: GenericChildren | string
  percent: number
  label?: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
  classList?: string[]
  full?: boolean
  disk?: boolean
}
