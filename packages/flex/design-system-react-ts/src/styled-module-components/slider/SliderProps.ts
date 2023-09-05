import { Small } from '../../objects/facets/Small'
import { AlertProps, VariantProps } from '../../objects/facets'
import { Hat } from '../../objects/facets/Hat'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface SliderProps extends Small, VariantProps, AlertProps, Hat {
  children?: GenericChildren | string
  stretched?: boolean
  className?: string
  classList?: string[]
  iconClassName?: string
  motionLess?: boolean
}
