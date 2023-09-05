import { ColumnsSize } from './ColumnsTypes'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Columns Interface
 */
export interface ColumnsProps {
  children?: GenericChildren | string
  multiline?: boolean
  centered?: boolean
  gapless?: boolean
  marginSize?: ColumnsSize
  verticalCentered?: boolean
  className?: string
  classList?: string[]
  mobile?: boolean
  flex?: boolean
}
