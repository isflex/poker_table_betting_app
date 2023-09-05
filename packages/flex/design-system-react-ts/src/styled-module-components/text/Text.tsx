import React from 'react'
import classNames from 'classnames'
import { TextProps } from './TextProps'
import { TextMarkup } from './TextEnum'
import { is } from 'flex-design-system-react-ts/services'

/**
 * Text component
 * @param children {string} Text child
 * @param className {string} Additionnal css classes
 * @param href {string} If Text Markup is A
 * @param title {string} title attribute
 * @param onClick {Function} onClick Event
 * @param inverted {Boolean} Text white color
 */
const Text = ({
  level,
  markup,
  children,
  className,
  href,
  title,
  onClick,
  typo,
  inverted,
  ...others
}: TextProps): React.JSX.Element => {
  const classes = classNames(
    {
      text: true,
    },
    level && is(`${level}`),
    inverted && is('inverted'),
    typo,
    className,
  )

  /**
   * If no markup return p with default level 1
   */
  const Tag = markup && (markup in TextMarkup || Object.values(TextMarkup).includes(markup)) ? markup : 'p'

  return (
    <Tag onClick={onClick} title={title} className={classes} {...(Tag === TextMarkup.A && { href: href })} {...others}>
      {children}
    </Tag>
  )
}

export default Text
