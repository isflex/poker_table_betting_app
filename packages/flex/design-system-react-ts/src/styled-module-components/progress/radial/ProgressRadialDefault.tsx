import React from 'react'
import classNames from 'classnames'
import { has, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { ProgressRadialProps } from './ProgressRadialProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Progress Radial component
 * @param percent {number} Progress percent
 * @param label {string} Custom label
 * @param description {string} Custom description
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * -------------------------- NATIVE PROPERTIES -------------------------------
 * @param alert {AlertState} Progress alert variant (SUCCESS|INFO|WARNING|DANGER|TERTIARY)
 * @param full {boolean} Full progressRadial
 * @param disk {boolean} Disk ProgressRadial
 */
const ProgressRadial = ({ className, classList, percent, label, description, ...others }: ProgressRadialProps): React.JSX.Element => {
  const classes = classNames(
    styles.radialProgressBar,
    percent && styles[camelCase(`progress-${percent}`) as keyof Styles],
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      {percent && (!label || !description) && <span className={styles.label}>{percent}%</span>}
      {(label || description) && (
        <>
          {label && <span className={classNames(styles.label, styles[camelCase(has('description')) as keyof Styles])}>{label}</span>}
          {description && <span className={styles.description}>{description}</span>}
        </>
      )}
      <div className={styles.pie} />
    </div>
  )
}

export default ProgressRadial
