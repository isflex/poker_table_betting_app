import React from 'react'
import classNames from 'classnames'
import { PricingPlanExtraWebProps } from './PricingPlanExtraProps'

/**
 * Pricing Plan Extra Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 */
const PricingPlanExtra = ({ className, ...others }: PricingPlanExtraWebProps): JSX.Element => {
  const classes = classNames('pricing-plan-extra', className)

  return <div className={classes} {...others} />
}

export default PricingPlanExtra
