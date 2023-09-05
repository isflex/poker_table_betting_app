import React from 'react'
import classNames from 'classnames'
import { NavbarWebProps } from './NavbarProps'
import { is } from 'flex-design-system-react-ts/services'

/**
 * Navbar component
 * @param children {ReactNode} Navbar child
 * @param className {string} Additionnal css classes
 * @param newNavbar {boolean} Display new header
 * @param npmNavbar {boolean} Display old header
 */
const Navbar = ({ children, className, newNavbar, npmNavbar, ...others }: NavbarWebProps): React.JSX.Element => {
  const classes = classNames(
    'navbar',
    newNavbar && !npmNavbar && is('new'),
    npmNavbar && !newNavbar && is('npm'),
    className
  )

  return (
    <div aria-label='main navigation' role='navigation' className={classes} {...others}>
      {children}
    </div>
  )
}

export default Navbar
