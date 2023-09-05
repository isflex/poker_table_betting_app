import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { PricingPlanWebProps } from './PricingPlanProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Pricing Plan Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 */
const PricingPlan = ({ className, classList, ...others }: PricingPlanWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.pricingPlan,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default PricingPlan
