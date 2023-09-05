import React from 'react'
import classNames from 'classnames'
import { FooterSubWebProps } from './FooterSubProps'
import { is } from '../../../services'

/**
 * Footer Sub Component - Subfooter
 * @param children {ReactNode} Children for Subfooter
 * @param className {string} Additionnal CSS Classes
 */
const FooterSub = ({ children, className, ...others }: FooterSubWebProps): React.JSX.Element => {
  const classes = classNames(is('footer-sub'), className)

  return (
    <div className={classes} {...others}>
      <div>{children}</div>
    </div>
  )
}

export default FooterSub
