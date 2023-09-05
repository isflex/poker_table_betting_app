import { Hat } from '../../../objects/facets/Hat'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Pricing Plan Product Interface
 */
export interface PricingPlanProductProps extends Hat {
  children?: GenericChildren | string
}

/**
 * Pricing Plan Product Web Interface
 */
export interface PricingPlanProductWebProps extends PricingPlanProductProps {
  className?: string
  classList?: string[]
}
