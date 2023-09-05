import { AlertProps } from '../../objects/facets/Alert'
import { Stacked } from '../../objects/facets/Stacked'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Progress Interface
 */
export interface ProgressProps extends AlertProps, Stacked {
  children?: GenericChildren | string
  percent?: number
  maxPercent?: number
  small?: boolean
  uniqueLegend?: string
  firstExtremLegend?: string
  secondExtremLegend?: string
  className?: string
  classList?: string[]
}
