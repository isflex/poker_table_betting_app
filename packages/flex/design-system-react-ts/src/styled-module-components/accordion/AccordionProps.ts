import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Accordion Interface
 */
export interface AccordionProps {
  children?: GenericChildren | string
  boxed?: boolean
  className?: string
  classList?: string[]
}
