import React from 'react'
import classNames from 'classnames'
import { PricingPlanStickerWebProps } from './PricingPlanStickerProps'

/**
 * Pricing Plan Sticker Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 */
const PricingPlanSticker = ({ className, ...others }: PricingPlanStickerWebProps): JSX.Element => {
  const classes = classNames('plan-sticker', className)

  return <div className={classes} {...others} />
}

export default PricingPlanSticker
