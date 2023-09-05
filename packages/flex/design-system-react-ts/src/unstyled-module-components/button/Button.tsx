import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { is } from '../../services/index'
import { ButtonMarkup } from './ButtonEnum'
import { ButtonProps } from './ButtonProps'

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
  inverted,
  alert,
  small,
  to,
  onClick,
  ...others
}: ButtonProps): JSX.Element => {
  const [isDisabled, setDisabled] = useState<boolean>(others.disabled || false)

  useEffect(() => {
    setDisabled(others.disabled || false)
  }, [others.disabled])

  const classes = classNames(
    'button',
    inverted && is('inverted'),
    loading && is(loading.getClassName()),
    variant && !alert && is(variant.getClassName()),
    alert && !variant && is(alert.getClassName()),
    fullwidth && is('fullwidth'),
    small && is('small'),
    className,
  )

  const Tag = markup && (markup in ButtonMarkup || Object.values(ButtonMarkup).includes(markup)) ? markup : 'button'

  if (Tag === 'button') {
    return (
      <button
        id={id}
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
        id={id}
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
    <a id={id} className={classes} href={href} onClick={(e) => !isDisabled && onClick && onClick(e)} {...others}>
      {children}
    </a>
  )
}

export default Button
