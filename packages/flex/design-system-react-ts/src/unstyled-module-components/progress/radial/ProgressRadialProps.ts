import { AlertProps } from '../../../objects/facets/Alert'

/**
 * Progress Radial Interface
 */
export interface ProgressRadialProps extends AlertProps {
  children?: React.ReactNode | string
  percent: number
  label?: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
  full?: boolean
  disk?: boolean
}
