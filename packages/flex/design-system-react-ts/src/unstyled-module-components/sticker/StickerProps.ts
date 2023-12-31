import { Invertable } from '../../objects/facets/Invertable'
import { Small } from '../../objects/facets/Small'
import { AlertProps, VariantProps } from '../../objects/facets'
import { Hat } from '../../objects/facets/Hat'
import { StickerMarkup } from './StickerEnum'

export interface StickerProps extends Small, VariantProps, AlertProps, Hat, Invertable {
  children?: React.ReactNode | string
  stretched?: boolean
  className?: string
  markup?: StickerMarkup
}
