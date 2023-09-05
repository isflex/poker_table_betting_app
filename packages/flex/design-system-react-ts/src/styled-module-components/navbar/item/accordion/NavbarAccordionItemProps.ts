import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Navbar Accordion Item Interface
 */
export interface NavbarAccordionItemProps {
  children?: GenericChildren | string
  headerContent?: string
}

/**
 * Navbar Accordion Item Web Interface
 */
export interface NavbarAccordionItemWebProps extends NavbarAccordionItemProps {
  className?: string
  classList?: string[]
}
