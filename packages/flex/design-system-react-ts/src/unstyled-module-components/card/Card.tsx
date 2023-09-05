import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { CardProps } from './CardProps'
import { is } from '../../services/classify'

/**
 * Card Component
 * @param flat Adding border for Card content
 * @param horizontal Horizontal Card orientation
 * @param floating Floating card
 * - ------------------ WEB PROPERTIES -----------------------
 * @param className Additionnal CSS Classes
 * @param skeleton Loading card
 */
const Card = ({ className, flat, horizontal, floating, skeleton, ...others }: CardProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(skeleton || false)

  useEffect(() => {
    setIsLoading(skeleton || false)
  }, [skeleton])

  const classes = classNames(
    'card',
    flat && is('flat'),
    horizontal && [is('horizontal'), is('vcentered')],
    floating && is('floating'),
    isLoading ? is('loading') : is('loaded'),
    className,
  )

  return <div className={classes} {...others} />
}

export default Card
