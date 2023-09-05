import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { MenuWebProps } from './MenuProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

const a11y = { role: 'menu' }

/**
 * Menu Component
 *  @param className {string} Additionnal CSS Classes
 *  @param children {ReactNode} Dropdown Children
 *  @param notASide {ReactNode} Menu is in MenuScrolling
 */

const Menu = ({ className, classList, notASide, ...others }: MenuWebProps): JSX.Element => (
  <ul className={classNames(
    styles.menuList,
    !notASide && styles.asideMenuList,
    className,
    validate(classList)
  )} {...a11y} {...others} />
)

export default Menu
