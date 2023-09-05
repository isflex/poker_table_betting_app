export type TargetElement = HTMLElement & {
  active?: boolean
  id?: string
}

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
  // children?: React.ReactNode | Array<React.ReactNode> | string
  children?: React.ReactNode | string
  active?: boolean
  onClick?: OnClickCallback
  className?: string
  id?: string
  disabled?: boolean
  headerItems?: React.ReactNode | string
  bodyItems?: React.ReactNode | string
}
