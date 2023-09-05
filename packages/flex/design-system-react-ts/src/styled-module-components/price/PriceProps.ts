import { PriceVariant, PriceLevel } from './PriceEnum'
import { Invertable } from '../../objects/facets/Invertable'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Price Interface
 */
export interface PriceProps extends Invertable {
  children?: GenericChildren | string
  variant?: PriceVariant
  amount: number
  mention?: string
  period?: string
  showCents?: boolean
  level?: PriceLevel
  huge?: boolean
  className?: string
  classList?: string[]
}
