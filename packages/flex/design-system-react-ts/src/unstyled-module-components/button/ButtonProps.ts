import { ButtonMarkup } from './ButtonEnum'
import { ClickEvent } from '../../events/OnClickEvent'
import { Fullwidth } from '../../objects/facets/Fullwidth'
import { AlertProps, VariantProps } from '../../objects/facets'
import { Loadable } from '../../objects/facets/Loadable'
import { Invertable } from '../../objects/facets/Invertable'

/**
 * Button Interface
 */
export interface ButtonProps extends Loadable, Invertable, VariantProps, AlertProps, Fullwidth {
  onClick?: ClickEvent
  children?: React.ReactNode | string
  disabled?: boolean
  small?: boolean
  markup?: ButtonMarkup
  href?: string
  className?: string
  to?: string
  id?: string
  compact?: boolean
}
