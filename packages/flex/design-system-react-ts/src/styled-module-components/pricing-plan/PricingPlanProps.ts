import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Pricing Plan Interface
 */
export interface PricingPlanProps {
  children?: GenericChildren | string
}

/**
 * Pricing Plan Web Interface
 */
export interface PricingPlanWebProps extends PricingPlanProps {
  className?: string
  classList?: string[]
}
