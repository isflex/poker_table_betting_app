export type TargetElement = HTMLElement & {
  active?: boolean
  id?: string
}

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * OnClickEvent type
 */
export type OnClickEvent = React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement> | { target: TargetElement }

export interface OnClickCallback {
  (e: OnClickEvent): void
}

/**
 * AccordionItem Interface
 */
export interface AccordionItemProps {
  // children?: React.ReactNode | Array<React.ReactNode>
  children?: GenericChildren | string
  active?: boolean
  onClick?: OnClickCallback
  className?: string
  classList?: string[]
  id?: string
  disabled?: boolean
  headerItems?: GenericChildren
  bodyItems?: GenericChildren
}
