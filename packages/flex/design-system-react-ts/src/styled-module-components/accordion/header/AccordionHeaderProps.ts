import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * AccordionHeader Interface
 */
export interface AccordionHeaderProps {
  // children?: React.ReactNode | undefined
  children?: GenericChildren | string
  toggle?: boolean
  toggleBox?: string
  toggleBoxClass?: string
  className?: string
  classList?: string[]
}
