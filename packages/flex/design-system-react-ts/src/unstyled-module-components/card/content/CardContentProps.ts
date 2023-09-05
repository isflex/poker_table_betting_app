import { ButtonMarkup } from '../../button/ButtonEnum'
import { TitleLevel } from '../../title/TitleEnum'
import { TextLevel } from '../../text/TextEnum'
import { ClickEvent } from '../../../events/OnClickEvent'
import { VariantState } from '../../../objects/facets/Variant'

/**
 * Card Content Interface
 */
export interface CardContentProps {
  children?: React.ReactNode | string
  titleSup?: string
  titleSupLevel?: TextLevel
  title?: string
  titleLevel?: TitleLevel
  buttonText?: string
  text?: string
  textLevel?: TextLevel
  buttonVariant?: VariantState
  buttonClick?: ClickEvent
  className?: string
  buttonMarkup?: ButtonMarkup
}
