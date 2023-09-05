import { Hat } from '../../../objects/facets/Hat'

/**
 * Pricing Plan Product Interface
 */
export interface PricingPlanProductProps extends Hat {
  children?: React.ReactNode | string
}

/**
 * Pricing Plan Product Web Interface
 */
export interface PricingPlanProductWebProps extends PricingPlanProductProps {
  className?: string
}
