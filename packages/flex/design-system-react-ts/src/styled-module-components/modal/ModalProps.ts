import { Clipped } from '../../objects/facets/Clipped'
import { ModalMarkup } from './ModalEnum'
import { ClickEvent } from '../../events/OnClickEvent'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Modal Interface
 */
export interface ModalProps extends Clipped {
  children?: GenericChildren | string
  active?: boolean
  title?: string
  content?: string
  className?: string
  classList?: string[]
  triggerContent?: string
  triggerClassNames?: string
  triggerMarkup?: ModalMarkup
  ctaContent?: string
  ctaOnClick?: ClickEvent
  onClose?: ClickEvent
  onOpen?: ClickEvent
}
