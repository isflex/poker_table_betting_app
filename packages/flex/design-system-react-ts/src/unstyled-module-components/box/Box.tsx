import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { BoxProps, BoxMarkup } from './BoxProps'
import { is } from '../../services/classify'

/**
 * Box Component
 * @param children {ReactNode} Box child
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param onClick {Function} onClick Event
 * @param markup {BoxMarkup} Clickable Box => BoxMarkup.A Not clickable box => BoxMarkup.DIV || null
 * @param skeleton {boolean} add or remove is-loading & is-loaded classes
 * @param to {string} Box link
 */
const Box = ({ children, className, onClick, markup, skeleton, to, ...others }: BoxProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  if (markup === BoxMarkup.A || to) {
    return (
      <a href={to} onClick={onClick && onClick} {...others}>
        <div className={classNames('box', className, isLoading ? is('loading') : is('loaded'))}>{children}</div>
      </a>
    )
  }

  return (
    <div
      onClick={onClick && onClick}
      className={classNames('box', className, isLoading ? is('loading') : is('loaded'))}
      {...others}
    >
      {children}
    </div>
  )
}

export default Box
