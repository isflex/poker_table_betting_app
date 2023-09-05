import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { PricingPlanExtraWebProps } from './PricingPlanExtraProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Pricing Plan Extra Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 */
const PricingPlanExtra = ({ className, classList, ...others }: PricingPlanExtraWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.pricingPlanExtra,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default PricingPlanExtra
