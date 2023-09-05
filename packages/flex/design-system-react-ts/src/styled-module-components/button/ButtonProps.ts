import { ButtonMarkup } from './ButtonEnum'
import { ClickEvent } from '../../events/OnClickEvent'
import { Fullwidth } from '../../objects/facets/Fullwidth'
import { AlertProps, VariantProps } from '../../objects/facets'
import { Loadable } from '../../objects/facets/Loadable'
import { Invertable } from '../../objects/facets/Invertable'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Button Interface
 */
export interface ButtonProps extends Loadable, Invertable, VariantProps, AlertProps, Fullwidth {
  onClick?: ClickEvent
  children?: GenericChildren | string
  disabled?: boolean
  small?: boolean
  markup?: ButtonMarkup
  href?: string
  className?: string
  classList?: string[]
  to?: string
  id?: string
  compact?: boolean
}
