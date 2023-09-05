import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { PricingPlanItemWebProps } from './PricingPlanItemProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Pricing Plan Item Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 * @param spacing {SpacingLevel} 1 to 12
 * @param narrow {boolean} Apply narrow
 */
const PricingPlanItems = ({ className, classList, spacing, narrow, ...others }: PricingPlanItemWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.planItem,
    spacing && styles[camelCase(is(`${spacing}`)) as keyof Styles],
    narrow && styles.isNarrow,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default PricingPlanItems
