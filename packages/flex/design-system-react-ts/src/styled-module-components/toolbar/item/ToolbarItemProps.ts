import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Toolbar Item Interface
 */
export interface ToolbarItemProps {
  children?: GenericChildren | string
  clippedToBottom?: boolean
}

/**
 * Toolbar Item Web Interface
 */
export interface ToolbarItemWebProps extends ToolbarItemProps {
  className?: string
  classList?: string[]
}
