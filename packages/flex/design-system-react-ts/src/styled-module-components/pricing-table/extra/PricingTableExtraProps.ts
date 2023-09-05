import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Pricing Table Extra Interface
 */
export interface PricingTableExtraProps {
  children?: GenericChildren | string
}

/**
 * Pricing Table Extra Web Interface
 */
export interface PricingTableExtraWebProps extends PricingTableExtraProps {
  className?: string
  classList?: string[]
}
