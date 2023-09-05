import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarLinksWebProps } from './NavbarLinksProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar Links Component
 * @param children {ReactNode} Navbar Links Child
 * @param className {string} Additionnal css classes
 */
const NavbarLinks = ({ className, classList, ...others }: NavbarLinksWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarLinks,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default NavbarLinks
