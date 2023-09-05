import React from 'react'
import classNames from 'classnames'
import { CardImageProps } from './CardImageProps'
import { is } from '../../../services/classify'

/**
 * Card Image Component
 * @param src Image source
 * @param alt Alt attribute
 * @param className Additionnal CSS Classes
 * @param size Image Card size on horizontal align
 */
const CardImage = ({ src, alt, className, size, ...others }: CardImageProps): JSX.Element => {
  const classes = classNames('card-image', size && is(`${size}`), className)

  return (
    <div className={classes}>
      <figure className={'image'} {...others}>
        <img {...{ src, alt }} />
      </figure>
    </div>
  )
}

export default CardImage
