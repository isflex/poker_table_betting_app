import { TagVariant } from './TagEnum'

type TagClickEventHandler = React.MouseEvent<Element> | unknown

export interface TagClickEvent {
  (e: TagClickEventHandler): void
}

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Tag Interface
 */
export interface TagProps {
  children?: GenericChildren | string
  variant?: TagVariant
  deletable?: boolean
  onClick?: TagClickEvent
  inverted?: boolean
  className?: string
  classList?: string[]
}
