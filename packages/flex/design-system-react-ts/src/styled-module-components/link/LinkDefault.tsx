import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { Text, TextMarkup } from '../text'
import { LinkProps } from './LinkProps'
import { is, has } from '../../services/classify'
import { Link as RouterLink } from 'react-router-dom'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

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
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param href {string} Href link
 * @param target {string} target
 * @param rel {string} rel
 */
const Link = ({
  children,
  className,
  classList,
  removeLinkClass,
  inverted,
  fixed,
  plain,
  to,
  href,
  tertiary,
  title,
  onClick,
  ...others
}: LinkProps): React.JSX.Element => {
  const classes = classNames(
    !removeLinkClass && styles.link,
    inverted && styles[camelCase(is('inverted')) as keyof Styles],
    fixed && styles[camelCase(is('static')) as keyof Styles],
    plain && styles[camelCase(is('plain')) as keyof Styles],
    tertiary && styles[camelCase(has('text-tertiary')) as keyof Styles],
    className,
    validate(classList),
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
