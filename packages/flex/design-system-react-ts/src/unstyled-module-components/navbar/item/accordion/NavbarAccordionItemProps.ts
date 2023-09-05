/**
 * Navbar Accordion Item Interface
 */
export interface NavbarAccordionItemProps {
  children?: React.ReactNode | string
  headerContent?: string
}

/**
 * Navbar Accordion Item Web Interface
 */
export interface NavbarAccordionItemWebProps extends NavbarAccordionItemProps {
  className?: string
}
