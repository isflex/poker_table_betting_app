import { Clipped } from '../../objects/facets/Clipped'
import { ModalMarkup } from './ModalEnum'
import { ClickEvent } from '../../events/OnClickEvent'

/**
 * Modal Interface
 */
export interface ModalProps extends Clipped {
  children?: React.ReactNode | string
  active?: boolean
  title?: string
  content?: string
  className?: string
  triggerContent?: string
  triggerClassNames?: string
  triggerMarkup?: ModalMarkup
  ctaContent?: string
  ctaOnClick?: ClickEvent
  onClose?: ClickEvent
  onOpen?: ClickEvent
}
