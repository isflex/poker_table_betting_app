import { BackgroundProps } from '../../objects/atoms/Background'
import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Toolbar Interface
 */
export interface ToolbarProps extends BackgroundProps {
  // children?: React.JSX.Element | React.JSX.Element[] | string | number
  children?: GenericChildren | string | number
  whiteBackground?: boolean
}

/**
 * Toolbar Web Interface
 */
export interface ToolbarWebProps extends ToolbarProps {
  className?: string
  classList?: string[]
}
