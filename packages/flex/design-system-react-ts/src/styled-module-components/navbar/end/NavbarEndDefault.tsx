import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarEndWebProps } from './NavbarEndProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar Navbar End Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 */
const NavbarEnd = ({ children, className, classList, ...others }: NavbarEndWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarEnd,
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      <div className={styles.navbarIcons}>{children}</div>
    </div>
  )
}

export default NavbarEnd
