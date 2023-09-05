import React from 'react'
import classNames from 'classnames'
import { MenuScrollingProps } from './MenuScrollingProps'

const a11y = { role: 'scrolling-menu' }

/**
 * Menu Component
 *  @param className {string} Additionnal CSS Classes
 *  @param children {number} ReactNode} Dropdown Children
 */

const MenuScrolling = ({ className, hasBackgroundWhite, pulled, ...others }: MenuScrollingProps): JSX.Element => {
  /**
   * If no markup return p with default level 1
   */
  const classes = ['menu', `is-pulled-${pulled ?? 'left'}`, className]
  if (hasBackgroundWhite) {
    classes.push('has-background-white')
  }
  return <aside className={classNames(classes)} {...a11y} {...others} />
}

export default MenuScrolling
