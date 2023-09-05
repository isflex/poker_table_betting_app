/**
 * Dropdown Interface
 */
export interface DropdownProps {
  children?: React.ReactNode | string
  active?: boolean
}

/**
 * Dropdown Web Interface
 */
export interface DropdownWebProps extends DropdownProps {
  className?: string
}
