import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { TextProps } from './TextProps'
import { TextMarkup } from './TextEnum'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Text component
 * @param children {string} Text child
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
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
  classList,
  href,
  title,
  onClick,
  typo,
  inverted,
  ...others
}: TextProps): React.JSX.Element => {
  const classes = classNames(
    {
      [styles.text]: true,
    },
    level && styles[camelCase(is(`${level}`)) as keyof Styles],
    inverted && styles.isInverted,
    typo && styles[camelCase((`${typo}`)) as keyof Styles],
    className,
    validate(classList),
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
