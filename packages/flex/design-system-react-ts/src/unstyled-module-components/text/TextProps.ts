import { TextLevel, TextMarkup } from './TextEnum'
import { TypographyColor } from '../../objects/Typography/TypographyColor'
import { TypographyTransform } from '../../objects/Typography/TypographyTransform'
import { TypographyBold } from '../../objects/Typography/TypographyBold'
import { TypographyAlign } from '../../objects/Typography/TypographyAlign'
import { ClickEvent } from '../../events/OnClickEvent'
import { Invertable } from '../../objects/facets'

type Styles = { [key: string]: unknown }

/**
 * Text Interface
 */
export interface TextProps extends Invertable {
  level?: TextLevel
  children?: React.ReactNode | string
  typo?: TypographyColor | TypographyTransform | TypographyBold | TypographyAlign
  onClick?: ClickEvent
  markup?: TextMarkup
  className?: string
  href?: string
  title?: string
  style?: Styles
}
