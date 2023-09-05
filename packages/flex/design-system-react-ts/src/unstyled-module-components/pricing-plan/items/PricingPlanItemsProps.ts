import { BackgroundProps } from '../../../objects/atoms/Background'

/**
 * Pricing Plan Items Interface
 */
export interface PricingPlanItemsProps extends BackgroundProps {
  children?: React.ReactNode | string
}

/**
 * Pricing Plan Items Web Interface
 */
export interface PricingPlanItemsWebProps extends PricingPlanItemsProps {
  className?: string
}
