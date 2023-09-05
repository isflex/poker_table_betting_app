/**
 * Dropdown Menu Interface
 */
export interface DropdownMenuProps {
  children?: React.ReactNode | string
}

/**
 * Dropdown Menu Web Interface
 */
export interface DropdownMenuWebProps extends DropdownMenuProps {
  className?: string
}
