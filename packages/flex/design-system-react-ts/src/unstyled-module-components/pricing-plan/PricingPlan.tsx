import React from 'react'
import classNames from 'classnames'
import { PricingPlanWebProps } from './PricingPlanProps'

/**
 * Pricing Plan Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 */
const PricingPlan = ({ className, ...others }: PricingPlanWebProps): JSX.Element => {
  const classes = classNames('pricing-plan', className)

  return <div className={classes} {...others} />
}

export default PricingPlan
