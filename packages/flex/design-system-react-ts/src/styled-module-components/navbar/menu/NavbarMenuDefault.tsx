import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarMenuWebProps } from './NavbarMenuProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar component
 * @param children {ReactNode} Navbar child
 * @param className {string} Additionnal css classes
 * @param hiddenTouch {boolean} Display modes only: mobile and desktop; use it to manage the responsive
 */
const NavbarMenu = ({ className, classList, hiddenTouch, ...others }: NavbarMenuWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarMenu,
    hiddenTouch && styles.isHiddenTouch,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default NavbarMenu
