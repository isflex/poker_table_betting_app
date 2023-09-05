import React from 'react'
import classNames from 'classnames'
import { has, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { PricingPlanItemsWebProps } from './PricingPlanItemsProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Pricing Plan Items Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 * @param background {BackgroundStyle} Custom background color
 */
const PricingPlanItems = ({ className, classList, background, ...others }: PricingPlanItemsWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.planItems,
    background && styles[camelCase(has(background.getClassName())) as keyof Styles],
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default PricingPlanItems
