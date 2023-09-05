import React from 'react'
import classNames from 'classnames'
import { DividerProps } from './DividerProps'
import { is } from '../../services/classify'

/**
 * Divider Component
 * @param content {string} Add text content for Divider
 * @param unboxed {boolean} Full-width separator in another component
 * @param marginless {boolean} Marginless divider
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes (ONLY FOR WEB)

 */
const Divider = ({ className, unboxed, content, marginless, ...others }: DividerProps): JSX.Element => {
  const classes = classNames(is('divider'), unboxed && is('unboxed'), marginless && is('marginless'), className)

  if (content) {
    return <hr className={classes} {...others} data-content={content} />
  }

  return <hr className={classes} {...others} />
}

export default Divider
