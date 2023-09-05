import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * SubMenuItem Interface
 */
export interface SubMenuItem {
  // children?: React.JSX.Element | React.JSX.Element[] | string | number
  children?: GenericChildren | string | number
}

/**
 * SubMenuItem Web Interface
 */
export interface SubMenuItemWebProps extends SubMenuItem {
  className?: string
  classList?: string[]
}
