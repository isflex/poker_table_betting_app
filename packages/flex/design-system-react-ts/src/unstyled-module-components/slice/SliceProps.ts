import { ClickEvent } from '../../events/OnClickEvent'

export interface SliceProps {
  children?: React.ReactNode | string
  className?: string
  onClick?: ClickEvent
  disabled?: boolean
  longCta?: boolean
  selectable?: boolean
}
