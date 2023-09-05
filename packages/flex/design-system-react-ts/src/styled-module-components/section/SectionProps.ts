import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Section Interface
 */
export interface SectionProps {
  children?: GenericChildren | string
  skeleton?: boolean
}

/**
 * Section Web Interface
 */
export interface SectionWebProps extends SectionProps {
  className?: string
  classList?: string[]
}
