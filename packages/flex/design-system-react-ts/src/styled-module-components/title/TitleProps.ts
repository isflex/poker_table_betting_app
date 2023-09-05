import { TitleLevel, TitleMarkup } from './TitleEnum'
import {
  Invertable,
  TypographyColor,
  TypographyTransform,
  TypographyBold,
  TypographyAlign,
} from 'flex-design-system-react-ts/objects'
import { GenericChildren, Styles } from 'flex-design-system-react-ts/generics'

/**
 * Title Interface
 */
export interface TitleProps extends Invertable {
  children?: GenericChildren | string
  level: TitleLevel
  loading?: boolean
  typo?: TypographyColor | TypographyTransform | TypographyBold | TypographyAlign | string
  skeleton?: boolean
  className?: string
  classList?: string[]
  href?: string
  inverted?: boolean
  markup?: TitleMarkup
  style?: Styles
}
