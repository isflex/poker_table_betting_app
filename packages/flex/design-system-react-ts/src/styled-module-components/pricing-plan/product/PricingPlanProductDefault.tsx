import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { PricingPlanProductWebProps } from './PricingPlanProductProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Pricing Plan Product Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 * @param hat {boolean} Has hat
 */
const PricingPlanProduct = ({ className, classList, hat, ...others }: PricingPlanProductWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.pricingPlanProduct,
    hat && styles.hasHat,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default PricingPlanProduct
