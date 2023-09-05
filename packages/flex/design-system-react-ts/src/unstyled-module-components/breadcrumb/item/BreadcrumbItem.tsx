import React from 'react'
import classNames from 'classnames'
import { Text, TextMarkup } from '../../text/index'
import { BreadcrumbItemWebProps } from './BreadcrumbItemProps'
import { is } from '../../../services/classify'

/**
 * Breadcrumb Item Component
 * @param children {string} Breadcrumb Item Text
 * @param active {boolean} Active link
 * @param className {string} Additionnal CSS Classes
 * @param href {string} Url
 */
const BreadcrumbItem = ({ children, active, className, ...others }: BreadcrumbItemWebProps): JSX.Element => {
  const classes = classNames(active && is('active'), className)

  return (
    <li className={classes}>
      <Text markup={TextMarkup.A} {...others}>
        {children}
      </Text>
    </li>
  )
}

export default BreadcrumbItem
