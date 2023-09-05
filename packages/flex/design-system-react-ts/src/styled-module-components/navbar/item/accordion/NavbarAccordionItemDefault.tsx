import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { NavbarAccordionItemWebProps } from './NavbarAccordionItemProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Navbar Accordion Item Component
 * @param children {ReactNode} Children
 * @param className {string} Additionnal css classes
 * @param headerContent {string} Content text for navbar-item-accordion-header
 */
const NavbarAccordionItem = ({
  children,
  className,
  classList,
  headerContent,
  ...others
}: NavbarAccordionItemWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.navbarItemAccordion,
    className,
    validate(classList)
  )
  const headerClasses = classNames(styles.navbarItemAccordionHeader)
  const contentClasses = classNames(styles.navbarItemAccordionContent)

  return (
    <div className={classes} {...others}>
      <div className={headerClasses}>{headerContent}</div>
      <div className={contentClasses}>{children}</div>
    </div>
  )
}

export default NavbarAccordionItem
