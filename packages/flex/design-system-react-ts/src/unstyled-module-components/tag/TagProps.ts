import { TagVariant } from './TagEnum'

type TagClickEventHandler = React.MouseEvent<Element> | unknown

export interface TagClickEvent {
  (e: TagClickEventHandler): void
}

/**
 * Tag Interface
 */
export interface TagProps {
  children?: React.ReactNode | string
  variant?: TagVariant
  deletable?: boolean
  onClick?: TagClickEvent
  inverted?: boolean
  className?: string
}
