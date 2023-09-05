import { Marginless } from '../../objects/facets/Marginless'

/**
 * Divider Interface
 */
export interface DividerProps extends Marginless {
  content?: string
  unboxed?: boolean
  className?: string
}
