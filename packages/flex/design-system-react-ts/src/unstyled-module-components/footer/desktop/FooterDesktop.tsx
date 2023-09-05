import React from 'react'
import classNames from 'classnames'
import { FooterDesktopWebProps } from './FooterDesktopProps'
import { is } from '../../../services/classify'
import { Accordion } from '../../accordion'

/**
 * Footer Desktop Component
 * @param children {ReactNode} Desktop Footer Children
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Footer fullwidth
 */
const FooterDesktop = ({ children, className, fullwidth, ...others }: FooterDesktopWebProps): JSX.Element => {
  const classes = classNames(is('hidden-touch'), is('footer-desktop'), fullwidth && is('fullwidth'), className)

  // Desktop Footer
  return (
    <Accordion className={classes} {...others}>
      {children}
    </Accordion>
  )
}

export default FooterDesktop
