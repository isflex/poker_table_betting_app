import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarDropdownWebProps } from './NavbarDropdownProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar Dropdown Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 */
const NavbarDropdown = ({ className, classList, ...others }: NavbarDropdownWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarDropdown,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default NavbarDropdown
