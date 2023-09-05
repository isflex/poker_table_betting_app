import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarStartWebProps } from './NavbarStartProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar Start Component
 * @param children {ReactNode} Navbar child
 * @param className {string} Additionnal css classes
 */
const NavbarStart = ({ className, classList, ...others }: NavbarStartWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarStart,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default NavbarStart
