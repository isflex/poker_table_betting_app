import React from 'react'
import classNames from 'classnames'
import { PricingPlanItemsWebProps } from './PricingPlanItemsProps'
import { has } from '../../../services'

/**
 * Pricing Plan Items Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 * @param background {BackgroundStyle} Custom background color
 */
const PricingPlanItems = ({ className, background, ...others }: PricingPlanItemsWebProps): JSX.Element => {
  const classes = classNames('plan-items', background && has(background.getClassName()), className)

  return <div className={classes} {...others} />
}

export default PricingPlanItems
