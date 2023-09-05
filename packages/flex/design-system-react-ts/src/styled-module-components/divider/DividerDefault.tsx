import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { DividerProps } from './DividerProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Divider Component
 * @param content {string} Add text content for Divider
 * @param unboxed {boolean} Full-width separator in another component
 * @param marginless {boolean} Marginless divider
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes (ONLY FOR WEB)

 */
const Divider = ({ className, classList, unboxed, content, marginless, ...others }: DividerProps): React.JSX.Element => {
  const classes = classNames(
    styles[camelCase(is('divider')) as keyof Styles],
    unboxed && styles[camelCase(is('unboxed')) as keyof Styles],
    marginless && styles[camelCase(is('marginless')) as keyof Styles],
    className,
    validate(classList),
  )

  if (content) {
    return <hr className={classes} {...others} data-content={content} />
  }

  return <hr className={classes} {...others} />
}

export default Divider
