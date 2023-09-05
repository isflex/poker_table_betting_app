import React from 'react'
import classNames from 'classnames'
import { MenuItemWebProps } from './MenuItemProps'
import { is } from '../../../services'
import { Link } from '../../link'
// import { Route, BrowserRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import { FlexBrowserRouter } from '@flexiness/domain-lib-flex-browser-router'
import { Icon } from '../../icon'
import { Badge } from '../../badge'

// accessibility
const a11y = { role: 'menuitem' }

/**
 * Menu Item Component - Menu Item component
 * @param children {ReactNode} Children for Menu Item
 * @param className {string} Additionnal CSS Classes
 * @param to {string} Link
 * @param arrow {boolean} Add arrow for MenuItem
 * @param badge {string|number} Add custom Badge
 * @param icon {IconName} Add custom Icon
 * @param onClick {Function} onClick Event for Menu Item
 */

type children = true | React.ReactChild | React.ReactFragment | React.ReactPortal
type child = React.ReactChild | React.ReactFragment | React.ReactPortal

const MenuItem = ({
  active,
  children,
  className,
  to,
  arrow,
  badge,
  icon,
  onClick,
  ...others
}: MenuItemWebProps): React.JSX.Element => {
  const classes = classNames('menu-item', active && is('active'), arrow && 'with-arrow', className)
  if (!children) {
    return <div />
  }
  return (
    // <BrowserRouter>
    <li {...a11y} onClick={onClick && onClick}>
      {React.Children.toArray(children as children).map((child: child, i: number) => {
        const item: React.ReactNode = (
          <>
            {icon && <Icon name={icon} />}
            {child}
            {badge && <Badge>{badge}</Badge>}
          </>
        )

        return (
          (child && typeof child.valueOf() === 'string' && (
            <Link key={i} className={classes} {...others} to={to} removeLinkClass>
              {item}
            </Link>
          )) || <React.Fragment key={i}>{item}</React.Fragment>
        )
      })}
    </li>
    //   <Route path='/' />
    // </BrowserRouter>
  )
}

export default MenuItem
