import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Container Interface
 */
export interface ContainerProps {
  children?: GenericChildren | string
  fluid?: boolean
  className?: string
  classList?: string[]
}
