import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarExtrasWebProps } from './NavbarExtrasProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar Navbar End Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 * @param hiddenTouch {boolean} Display modes only: mobile and desktop; use it to manage the responsive
 */
const NavbarExtras = ({ className, classList, hiddenTouch, ...others }: NavbarExtrasWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarExtras,
    hiddenTouch && styles.isHiddenTouch,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default NavbarExtras
