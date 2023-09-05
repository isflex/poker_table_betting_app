import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { PricingPlanFooterWebProps } from './PricingPlanFooterProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Pricing Plan Footer Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 */
const PricingPlanFooter = ({ className, classList, ...others }: PricingPlanFooterWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.planFooter,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default PricingPlanFooter
