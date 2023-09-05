import React from 'react'
import classNames from 'classnames'
import { Text, TextMarkup } from '../text'
import { LinkProps } from './LinkProps'
import { is, has } from '../../services/classify'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Link Component
 * @param children {string} Content children for Link
 * @param fixed {boolean} Static link with no animation
 * @param plain {boolean} Link without underline
 * @param to {string} Url to open
 * @param tertiary {boolean} Tertiary variant
 * @param title {string} Title attribute
 * @param onClick {Function} onClick Event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param href {string} Href link
 */
const Link = ({
  children,
  className,
  removeLinkClass,
  fixed,
  plain,
  to,
  href,
  tertiary,
  title,
  onClick,
  ...others
}: LinkProps): JSX.Element => {
  const classes = classNames(
    !removeLinkClass && 'link',
    fixed && is('static'),
    plain && is('plain'),
    tertiary && has('text-tertiary'),
    className,
  )

  if (to) {
    return (
      <RouterLink onClick={onClick && onClick} className={classes} to={to || ''} {...others}>
        <span>{title || children}</span>
      </RouterLink>
    )
  }

  return (
    <Text onClick={onClick && onClick} title={title} markup={TextMarkup.A} className={classes} href={href} {...others}>
      {children}
    </Text>
  )
}

export default Link
