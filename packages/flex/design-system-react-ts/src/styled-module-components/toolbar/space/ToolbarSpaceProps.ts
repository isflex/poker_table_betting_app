import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Toolbar Space Interface
 */
export interface ToolbarSpaceProps {
  children?: GenericChildren | string
}

/**
 * Toolbar Space Web Interface
 */
export interface ToolbarSpaceWebProps extends ToolbarSpaceProps {
  className?: string
  classList?: string[]
}
