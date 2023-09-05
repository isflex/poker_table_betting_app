import React from 'react'
import classNames from 'classnames'
import { PricingPlanHeaderWebProps } from './PricingPlanHeaderProps'
import { has } from '../../../services'

/**
 * Pricing Plan Header Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 * @param background {BackgroundStyle} Custom background color
 */
const PricingPlanHeader = ({ className, background, ...others }: PricingPlanHeaderWebProps): JSX.Element => {
  const classes = classNames('plan-header', background && has(background.getClassName()), className)

  return <div className={classes} {...others} />
}

export default PricingPlanHeader
