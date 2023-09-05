import { ButtonMarkup } from '../../button/ButtonEnum'
import { TitleLevel } from '../../title/TitleEnum'
import { TextLevel } from '../../text/TextEnum'
import { ClickEvent } from '../../../events/OnClickEvent'
import { VariantState } from '../../../objects/facets/Variant'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Card Content Interface
 */
export interface CardContentProps {
  children?: GenericChildren | string
  titleSup?: string
  titleSupLevel?: TextLevel
  title?: GenericChildren | string
  titleLevel?: TitleLevel
  buttonText?: GenericChildren | string
  text?: GenericChildren | string
  textLevel?: TextLevel
  buttonVariant?: VariantState
  buttonClick?: ClickEvent
  className?: string
  classList?: string[]
  buttonMarkup?: ButtonMarkup
}
