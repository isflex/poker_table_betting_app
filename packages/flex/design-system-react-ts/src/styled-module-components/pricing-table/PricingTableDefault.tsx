import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { PricingTableWebProps } from './PricingTableProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Pricing Table Component
 * @param children {ReactNode} Title child
 * @param className {string} Additionnal css classes
 * @param special {boolean} New offers Pricing Table
 */
const PricingTable = ({ className, classList, special, ...others }: PricingTableWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.pricingTable,
    special && styles.isSpecial,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default PricingTable
