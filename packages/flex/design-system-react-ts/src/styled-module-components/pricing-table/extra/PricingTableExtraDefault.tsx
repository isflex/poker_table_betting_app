import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { PricingTableExtraWebProps } from './PricingTableExtraProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Pricing Table Extra Component
 * @param children {ReactNode} Title child
 * @param className {string} Additionnal css classes
 */
const PricingTableExtra = ({ className, classList, ...others }: PricingTableExtraWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.pricingTableExtra,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default PricingTableExtra
