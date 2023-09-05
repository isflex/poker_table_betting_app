import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Breadcrumb Interface
 */
export interface BreadcrumbProps {
  children?: GenericChildren | string
}

/**
 * Breadcrumb Web Interface
 */
export interface BreadcrumbWebProps extends BreadcrumbProps {
  className?: string
  classList?: string[]
}
