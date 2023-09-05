import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { PricingPlanPriceWebProps } from './PricingPlanPriceProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Pricing Plan Price Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 */
const PricingPlanPrice = ({ className, classList, ...others }: PricingPlanPriceWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.planPrice,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default PricingPlanPrice
