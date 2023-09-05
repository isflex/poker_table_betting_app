import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { NavbarDropdownSectionWebProps } from './NavbarDropdownSectionProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar Dropdown Section Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 * @param extras {boolean} Adding extras content
 */
const NavbarDropdownSection = ({ className, classList, extras, ...others }: NavbarDropdownSectionWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarDropdownSection,
    extras && is('extras'),
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default NavbarDropdownSection
