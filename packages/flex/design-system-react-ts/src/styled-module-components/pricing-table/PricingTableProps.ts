import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Pricing Table Interface
 */
export interface PricingTableProps {
  children?: GenericChildren | string
  special?: boolean
}

/**
 * Pricing Table Web Interface
 */
export interface PricingTableWebProps extends PricingTableProps {
  className?: string
  classList?: string[]
}
