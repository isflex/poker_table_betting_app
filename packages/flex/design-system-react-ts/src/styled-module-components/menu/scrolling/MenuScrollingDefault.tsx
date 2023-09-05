import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { MenuScrollingProps } from './MenuScrollingProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

const a11y = { role: 'scrolling-menu' }

/**
 * Menu Component
 *  @param className {string} Additionnal CSS Classes
 *  @param children {number} ReactNode} Dropdown Children
 */

const MenuScrolling = ({ className, classList, hasBackgroundWhite, pulled, ...others }: MenuScrollingProps): React.JSX.Element => {
  /**
   * If no markup return p with default level 1
   */
  const classes = classNames(
    styles.menu,
    styles[camelCase(`is-pulled-${pulled ?? 'left'}`) as keyof Styles],
    hasBackgroundWhite && styles.hasBackgroundWhite,
    className,
    validate(classList)
  )

  return <aside className={classes} {...a11y} {...others} />
}

export default MenuScrolling
