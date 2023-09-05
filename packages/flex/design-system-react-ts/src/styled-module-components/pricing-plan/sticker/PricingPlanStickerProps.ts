import { GenericChildren } from 'flex-design-system-react-ts/generics'

/**
 * Pricing Plan Sticker Interface
 */
export interface PricingPlanStickerProps {
  children?: GenericChildren | string
}

/**
 * Pricing Plan Sticker Web Interface
 */
export interface PricingPlanStickerWebProps extends PricingPlanStickerProps {
  className?: string
  classList?: string[]
}
