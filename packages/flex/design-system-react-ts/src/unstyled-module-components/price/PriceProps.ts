import { PriceVariant, PriceLevel } from './PriceEnum'
import { Invertable } from '../../objects/facets/Invertable'

/**
 * Price Interface
 */
export interface PriceProps extends Invertable {
  children?: React.ReactNode | string
  variant?: PriceVariant
  amount: number
  mention?: string
  period?: string
  showCents?: boolean
  level?: PriceLevel
  huge?: boolean
  className?: string
}
