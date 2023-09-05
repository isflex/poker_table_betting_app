/**
 * Menu Interface
 */
export interface MenuProps {
  children?: React.ReactNode
}

/**
 * Menu Web Interface
 */
export interface MenuWebProps extends MenuProps {
  className?: string
  notASide?: boolean
}
