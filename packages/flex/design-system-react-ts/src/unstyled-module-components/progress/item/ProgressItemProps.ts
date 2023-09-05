import { AlertProps } from '../../../objects/facets'

/**
 * Progress Item Interface
 */
export interface ProgressItemProps extends AlertProps {
  children?: React.ReactNode | string
  percent: number
  minPercent?: number
  maxPercent?: number
  className?: string
}
