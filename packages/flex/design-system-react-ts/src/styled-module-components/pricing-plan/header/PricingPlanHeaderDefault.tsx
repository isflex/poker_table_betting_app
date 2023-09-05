import React from 'react'
import classNames from 'classnames'
import { has, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { PricingPlanHeaderWebProps } from './PricingPlanHeaderProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Pricing Plan Header Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 * @param background {BackgroundStyle} Custom background color
 */
const PricingPlanHeader = ({ className, classList, background, ...others }: PricingPlanHeaderWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.planHeader,
    background && styles[camelCase(has(background.getClassName())) as keyof Styles],
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default PricingPlanHeader
