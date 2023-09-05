import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { ProgressItemProps } from './ProgressItemProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Progress Item component - Only if stacked
 * @param percent {number} Progress percent
 * @param minPercent {number} Default min percent is 100
 * @param maxPercent {number} Default max percent is 100
 * @param alert {AlertState} Progress alert variant (SUCCESS|INFO|WARNING|DANGER)
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 */
const ProgressItem = ({
  className,
  classList,
  percent,
  maxPercent = 100,
  minPercent = 0,
  alert,
  ...others
}: ProgressItemProps): React.JSX.Element => {
  const classes = classNames(
    styles.progressBar,
    alert && styles[camelCase(is(alert.getClassName())) as keyof Styles],
    !alert && styles[camelCase(is('primary')) as keyof Styles],
    className,
    validate(classList),
  )

  return (
    <div
      {...(percent && { style: { width: `${percent}%` } })}
      className={classes}
      role='progressbar'
      aria-valuenow={percent}
      aria-valuemin={minPercent}
      aria-valuemax={maxPercent}
      {...others}
    />
  )
}

export default ProgressItem
