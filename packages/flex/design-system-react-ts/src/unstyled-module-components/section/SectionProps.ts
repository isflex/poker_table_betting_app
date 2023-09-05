/**
 * Section Interface
 */
export interface SectionProps {
  children?: React.ReactNode | string
  skeleton?: boolean
}

/**
 * Section Web Interface
 */
export interface SectionWebProps extends SectionProps {
  className?: string
}
