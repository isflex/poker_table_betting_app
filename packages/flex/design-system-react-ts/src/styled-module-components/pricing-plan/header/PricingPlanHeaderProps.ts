import { BackgroundProps } from '../../../objects/atoms/Background'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Pricing Plan Header Interface
 */
export interface PricingPlanHeaderProps extends BackgroundProps {
  children?: GenericChildren | string
}

/**
 * Pricing Plan Header Web Interface
 */
export interface PricingPlanHeaderWebProps extends PricingPlanHeaderProps {
  className?: string
  classList?: string[]
}
