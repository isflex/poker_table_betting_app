import React from 'react'
import classNames from 'classnames'
import { FooterWebProps } from './FooterProps'
import { is } from 'flex-design-system-react-ts/services'

/**
 * Footer Component
 * @param children {ReactNode} Footer Children
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Footer fullwidth
 */
const Footer = ({ children, className, fullwidth, ...others }: FooterWebProps): React.JSX.Element => {
  const classes = classNames(fullwidth && is('fullwidth'), className)

  return (
    <footer className={classes} {...others}>
      <div className='footer'>{children}</div>
    </footer>
  )
}

export default Footer
