import { ColumnsSize } from './ColumnsTypes'

/**
 * Columns Interface
 */
export interface ColumnsProps {
  children?: React.ReactNode | string
  multiline?: boolean
  centered?: boolean
  gapless?: boolean
  marginSize?: ColumnsSize
  verticalCentered?: boolean
  className?: string
  mobile?: boolean
  flex?: boolean
}
