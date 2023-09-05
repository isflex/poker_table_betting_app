import React from 'react'
import classNames from 'classnames'
import { NavbarItemWebProps } from './NavbarItemProps'
import { NavbarItemMarkup } from './NavbarItemEnum'
import { is } from '../../../services'

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
  megaDropdown,
  hoverable,
  markup,
  hiddenMobile,
  hiddenTablet,
  hiddenDesktop,
  alternate,
  active,
  ...others
}: NavbarItemWebProps): JSX.Element => {
  const classes = classNames(
    'navbar-item',
    megaDropdown && is('megadropdown-parent'),
    hoverable && is('hoverable'),
    hiddenMobile && is('hidden-mobile'),
    hiddenTablet && is('hidden-tablet'),
    hiddenDesktop && is('hidden-desktop'),
    alternate && is('alternate'),
    active && is('active'),
    className,
  )

  const Tag =
    markup && (markup in NavbarItemMarkup || Object.values(NavbarItemMarkup).includes(markup)) ? markup : 'div'

  return (
    <Tag id={id} className={classes} {...others}>
      {children}
    </Tag>
  )
}

export default NavbarItem
