import React from 'react'
import classNames from 'classnames'
import { FooterWebProps } from './FooterProps'
import { is } from '../../services/classify'

/**
 * Footer Component
 * @param children {ReactNode} Footer Children
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Footer fullwidth
 */
const Footer = ({ children, className, fullwidth, ...others }: FooterWebProps): JSX.Element => {
  const classes = classNames(fullwidth && is('fullwidth'), className)

  return (
    <footer className={classes} {...others}>
      <div className='footer'>{children}</div>
    </footer>
  )
}

export default Footer
