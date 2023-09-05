import { Invertable } from '../../objects/facets/Invertable'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Options Interface
 */
export interface OptionsProps extends Invertable {
  children?: GenericChildren | string
  className?: string
  classList?: string[]
}
