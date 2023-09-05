/**
 * Breadcrumb Interface
 */
export interface BreadcrumbProps {
  children?: React.ReactNode | string
}

/**
 * Breadcrumb Web Interface
 */
export interface BreadcrumbWebProps extends BreadcrumbProps {
  className?: string
}
