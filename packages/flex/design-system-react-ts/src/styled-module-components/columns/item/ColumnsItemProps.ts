import { ColumnsSize } from '../ColumnsTypes'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Columns Item Interface
 */
export interface ColumnsItemProps {
  children?: GenericChildren | string
  size?: ColumnsSize
  mobileSize?: ColumnsSize
  tabletSize?: ColumnsSize
  desktopSize?: ColumnsSize
  narrow?: boolean
  className?: string
  classList?: string[]
}
