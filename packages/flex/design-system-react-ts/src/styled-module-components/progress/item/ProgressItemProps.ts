import { AlertProps } from '../../../objects/facets'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Progress Item Interface
 */
export interface ProgressItemProps extends AlertProps {
  children?: GenericChildren | string
  percent: number
  minPercent?: number
  maxPercent?: number
  className?: string
  classList?: string[]
}
