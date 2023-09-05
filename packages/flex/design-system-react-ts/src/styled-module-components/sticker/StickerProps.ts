import { Invertable } from '../../objects/facets/Invertable'
import { Small } from '../../objects/facets/Small'
import { AlertProps, VariantProps } from '../../objects/facets'
import { Hat } from '../../objects/facets/Hat'
import { StickerMarkup } from './StickerEnum'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface StickerProps extends Small, VariantProps, AlertProps, Hat, Invertable {
  children?: GenericChildren | string
  stretched?: boolean
  className?: string
  classList?: string[]
  markup?: StickerMarkup
}
