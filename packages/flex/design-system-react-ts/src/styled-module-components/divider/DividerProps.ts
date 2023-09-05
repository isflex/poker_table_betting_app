import { Marginless } from '../../objects/facets/Marginless'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Divider Interface
 */
export interface DividerProps extends Marginless {
  content?: string
  unboxed?: boolean
  className?: string
  classList?: string[]
}
