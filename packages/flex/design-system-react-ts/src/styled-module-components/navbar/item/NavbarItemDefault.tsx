import React from 'react'
import classNames from 'classnames'
import { nanoid } from 'nanoid'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarItemWebProps } from './NavbarItemProps'
import { NavbarItemMarkup } from './NavbarItemEnum'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar Item Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 * @param id {string} Custom id
 * @param markup {NavbarItemMarkup} Available : (DIV|A|SPAN|P) : Default : DIV
 * @param hoverable {boolean} Hoverable item
 * @param hiddenMobile {boolean} Hide on mobile
 * @param hiddenTablet {boolean} Hide on tablet
 * @param hiddenDesktop {boolean} Hide on desktop
 * @param alternate {boolean} Use it for connect button
 */
const NavbarItem = ({
  children,
  id,
  className,
  classList,
  megaDropdown,
  hoverable,
  markup,
  hiddenMobile,
  hiddenTablet,
  hiddenDesktop,
  alternate,
  active,
  ...others
}: NavbarItemWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarItem,
    megaDropdown && styles.isMegadropdownParent,
    hoverable && styles.isHoverable,
    hiddenMobile && styles.isHiddenMobile,
    hiddenTablet && styles.isHiddenTablet,
    hiddenDesktop && styles.isHiddenDesktop,
    alternate && styles.isAlternate,
    active && styles.isActive,
    className,
    validate(classList)
  )

  const Tag =
    markup && (markup in NavbarItemMarkup || Object.values(NavbarItemMarkup).includes(markup)) ? markup : 'div'

  const idGenerated = nanoid()

  return (
    <Tag id={id || idGenerated} className={classes} {...others}>
      {children}
    </Tag>
  )
}

export default NavbarItem
