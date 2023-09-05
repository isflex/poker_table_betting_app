import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Dropdown Menu Interface
 */
export interface DropdownMenuProps {
  children?: GenericChildren | string
}

/**
 * Dropdown Menu Web Interface
 */
export interface DropdownMenuWebProps extends DropdownMenuProps {
  className?: string
  classList?: string[]
}
