import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
// import { camelCase } from 'lodash'
import { ContainerProps } from './ContainerProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Container Component
 * @param fluid {boolean} Make the container usable across the width of your section
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 */
const Container = ({ className, classList, fluid, ...others }: ContainerProps): React.JSX.Element => {
  const classes = classNames(
    styles.container,
    fluid && styles.isFluid,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default Container
