import { ColumnsSize } from '../ColumnsTypes'

/**
 * Columns Item Interface
 */
export interface ColumnsItemProps {
  children?: React.ReactNode | string
  size?: ColumnsSize
  mobileSize?: ColumnsSize
  tabletSize?: ColumnsSize
  desktopSize?: ColumnsSize
  narrow?: boolean
  className?: string
}
