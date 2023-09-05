import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Breadcrumb Item Interface
 */
export interface BreadcrumbItemProps {
  children?: GenericChildren | string
  active?: boolean
  href?: string
}

/**
 * Breadcrumb Item Web Interface
 */
export interface BreadcrumbItemWebProps extends BreadcrumbItemProps {
  className?: string
  classList?: string[]
}
