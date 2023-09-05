import { Small } from '../../objects/facets/Small'
import { AlertProps, VariantProps } from '../../objects/facets'
import { Hat } from '../../objects/facets/Hat'

export interface SliderProps extends Small, VariantProps, AlertProps, Hat {
  children?: React.ReactNode | string
  stretched?: boolean
  className?: string
  iconClassName?: string
  motionLess?: boolean
}
