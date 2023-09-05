import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Pricing Plan Price Interface
 */
export interface PricingPlanPriceProps {
  children?: GenericChildren | string
}

/**
 * Pricing Plan Price Web Interface
 */
export interface PricingPlanPriceWebProps extends PricingPlanPriceProps {
  className?: string
  classList?: string[]
}
