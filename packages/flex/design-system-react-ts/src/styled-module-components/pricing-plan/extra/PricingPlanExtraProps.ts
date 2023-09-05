import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Pricing Plan Extra Interface
 */
export interface PricingPlanExtraProps {
  children?: GenericChildren | string
}

/**
 * Pricing Plan Extra Web Interface
 */
export interface PricingPlanExtraWebProps extends PricingPlanExtraProps {
  className?: string
  classList?: string[]
}
