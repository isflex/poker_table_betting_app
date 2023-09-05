import { ClickEvent } from '../../events/OnClickEvent'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

export interface SliceProps {
  children?: GenericChildren | string
  className?: string
  classList?: string[]
  onClick?: ClickEvent
  disabled?: boolean
  longCta?: boolean
  selectable?: boolean
}
