/**
 * Breadcrumb Item Interface
 */
export interface BreadcrumbItemProps {
  children?: string
  active?: boolean
  href?: string
}

/**
 * Breadcrumb Item Web Interface
 */
export interface BreadcrumbItemWebProps extends BreadcrumbItemProps {
  className?: string
}
