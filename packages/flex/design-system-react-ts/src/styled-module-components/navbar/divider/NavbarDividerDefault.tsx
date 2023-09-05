import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarDividerWebProps } from './NavbarDividerProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar Divider
 * @param children {ReactNode} Navbar Divider Children
 * @param className {string} Additionnal css classes
 */
const NavbarDivider = ({ className, classList, ...others }: NavbarDividerWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarBrand,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default NavbarDivider
