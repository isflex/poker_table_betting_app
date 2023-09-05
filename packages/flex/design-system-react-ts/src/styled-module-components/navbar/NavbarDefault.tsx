import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarWebProps } from './NavbarProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar component
 * @param children {ReactNode} Navbar child
 * @param className {string} Additionnal css classes
 * @param newNavbar {boolean} Display new header
 * @param npmNavbar {boolean} Display old header
 */
const Navbar = ({ children, className, classList, newNavbar, npmNavbar, ...others }: NavbarWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbar,
    newNavbar && !npmNavbar && styles.isNew,
    npmNavbar && !newNavbar && styles.isNpm,
    className,
    validate(classList)
  )

  return (
    <div aria-label='main navigation' role='navigation' className={classes} {...others}>
      {children}
    </div>
  )
}

export default Navbar
