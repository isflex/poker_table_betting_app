import { TitleLevel, TitleMarkup } from './TitleEnum'
import {
  Invertable,
  TypographyColor,
  TypographyTransform,
  TypographyBold,
  TypographyAlign,
} from 'flex-design-system-react-ts/objects'

type Styles = { [key: string]: unknown }

/**
 * Title Interface
 */
export interface TitleProps extends Invertable {
  children?: React.ReactNode | string
  level: TitleLevel
  loading?: boolean
  typo?: TypographyColor | TypographyTransform | TypographyBold | TypographyAlign | string
  skeleton?: boolean
  className?: string
  href?: string
  inverted?: boolean
  markup?: TitleMarkup
  style?: Styles
}
