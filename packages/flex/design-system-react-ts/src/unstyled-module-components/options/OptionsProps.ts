import { Invertable } from '../../objects/facets/Invertable'

/**
 * Options Interface
 */
export interface OptionsProps extends Invertable {
  children?: React.ReactNode | string
  className?: string
}
