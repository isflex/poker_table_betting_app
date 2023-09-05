import React from 'react'
import classNames from 'classnames'
import { StickerProps } from './StickerProps'
import { is } from '../../services/classify'
import { StickerMarkup } from './StickerEnum'

/**
 * Sticker component
 * @param children {ReactNode} Sticker child
 * @param stretched {true|false} Stretched sticker
 * @param variant {AlertState} Sticker variant : primary|secondary
 * @param small {boolean} Small Sticker
 * @param alert {AlertState} Alert variant color for Sticker
 * @param inverted {boolean} Invert sticker color
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {StickerMarkup} HTML element : p|span|div
 * @param hat {boolean} Hat Sticker
 * @param className {string} Additionnal css classes
 */
const Sticker = ({
  className,
  children,
  stretched,
  variant,
  small,
  alert,
  hat,
  markup,
  inverted,
  ...others
}: StickerProps): JSX.Element => {
  const classes = classNames(
    'sticker',
    stretched && is('stretched'),
    variant && !alert && is(variant.getClassName()),
    alert && !variant && is(alert.getClassName()),
    small && is('small'),
    hat && is('hat'),
    inverted && is('inverted'),
    className,
  )

  const Tag = markup && (markup in StickerMarkup || Object.values(StickerMarkup).includes(markup)) ? markup : 'div'

  return (
    <Tag className={classes} {...others}>
      {children}
    </Tag>
  )
}

export default Sticker
