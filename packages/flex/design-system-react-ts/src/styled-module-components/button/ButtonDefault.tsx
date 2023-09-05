import classNames from 'classnames'
import { nanoid } from 'nanoid'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { ButtonMarkup } from './ButtonEnum'
import { ButtonProps } from './ButtonProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Button component
 * @param loading {boolean} Loading button
 * @param inverted {boolean} Inverted button
 * @param disabled {boolean} Disabled button
 * @param variant {VariantState} Button color : primary|secondary|tertiary
 * @param alert {AlertState} Alert variant color for Button
 * @param children {ReactNode} Button child
 * @param fullwidth {boolean} Fullwidth button
 * @param small {boolean} Small button
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {ButtonMarkup} HTML element : button|input|a (ONLY FOR WEB)
 * @param className {string} Additionnal css classes (ONLY FOR WEB)
 * @param classList {array} Additionnal css classes (ONLY FOR WEB)
 * @param id {string} Custom id for button (ONLY FOR WEB)
 * @param to {string} Link
 */
const Button = ({
  markup,
  loading,
  variant,
  href,
  id,
  fullwidth,
  children,
  className,
  classList,
  inverted,
  alert,
  small,
  to,
  onClick,
  ...others
}: ButtonProps): React.JSX.Element => {
  const [isDisabled, setDisabled] = useState<boolean>(others.disabled || false)

  useEffect(() => {
    setDisabled(others.disabled || false)
  }, [others.disabled])

  const classes = classNames(
    styles.button,
    inverted && styles[camelCase(is('inverted')) as keyof Styles],
    loading && styles[camelCase(is(loading.getClassName())) as keyof Styles],
    variant && !alert && styles[camelCase(is(variant.getClassName())) as keyof Styles],
    variant && !alert && is(variant.getClassName()),
    alert && !variant && styles[camelCase(is(alert.getClassName())) as keyof Styles],
    fullwidth && styles[camelCase(is('fullwidth')) as keyof Styles],
    small && styles[camelCase(is('small')) as keyof Styles],
    className,
    validate(classList),
  )

  const Tag = markup && (markup in ButtonMarkup || Object.values(ButtonMarkup).includes(markup)) ? markup : 'button'

  const idGenerated = nanoid()

  if (Tag === 'button') {
    return (
      <button
        id={id || idGenerated}
        className={classes}
        disabled={isDisabled}
        onClick={(e) => !isDisabled && onClick && onClick(e)}
        {...others}
      >
        {children}
      </button>
    )
  }
  if (Tag === 'input') {
    return (
      <input
        id={id || idGenerated}
        className={classes}
        {...others}
        onClick={(e) => !isDisabled && onClick && onClick(e)}
        disabled={isDisabled}
        type={'submit'}
        value={`${children}`}
      />
    )
  }
  if (to && !isDisabled) {
    return (
      <RouterLink to={to} className={classes} {...others}>
        <span>{children}</span>
      </RouterLink>
    )
  }
  return (
    <a id={id || idGenerated} className={classes} href={href} onClick={(e) => !isDisabled && onClick && onClick(e)} {...others}>
      {children}
    </a>
  )
}

export default Button
