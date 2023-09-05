import { BackgroundProps } from '../../../objects/atoms/Background'

import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Pricing Plan Items Interface
 */
export interface PricingPlanItemsProps extends BackgroundProps {
  children?: GenericChildren | string
}

/**
 * Pricing Plan Items Web Interface
 */
export interface PricingPlanItemsWebProps extends PricingPlanItemsProps {
  className?: string
  classList?: string[]
}
