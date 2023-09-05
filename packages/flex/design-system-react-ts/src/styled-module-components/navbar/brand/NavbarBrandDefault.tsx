import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarBrandWebProps } from './NavbarBrandProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar Brand Component - Bouygues Logo
 * @param children {ReactNode} Navbar Brand Children
 * @param className {string} Additionnal css classes
 */
const NavbarBrand = ({ className, classList, ...others }: NavbarBrandWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarBrand,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default NavbarBrand
