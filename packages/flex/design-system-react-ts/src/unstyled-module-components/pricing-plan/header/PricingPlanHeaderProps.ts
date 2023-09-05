import { BackgroundProps } from '../../../objects/atoms/Background'

/**
 * Pricing Plan Header Interface
 */
export interface PricingPlanHeaderProps extends BackgroundProps {
  children?: React.ReactNode | string
}

/**
 * Pricing Plan Header Web Interface
 */
export interface PricingPlanHeaderWebProps extends PricingPlanHeaderProps {
  className?: string
}
