import React from 'react'
import classNames from 'classnames'
import { SliceImageProps } from './SliceImageProps'
import { is } from '../../../services/classify'

/**
 * Slice Image Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Custom children for Slice Image
 * @param src {string} Image source
 * @param alt {string} Image alt
 * @param rounded {boolean} Rounded Slice Image
 */
const SliceImage = ({ children, className, src, alt, rounded, ...others }: SliceImageProps): JSX.Element => {
  const classes = classNames('slice-image', className)

  if (children) {
    return (
      <div className={classes} {...others}>
        {children}
      </div>
    )
  }

  return (
    <div className={classes} {...others}>
      <div className='image'>
        <img className={(rounded && is('rounded')) || ''} src={src} alt={alt} />
      </div>
    </div>
  )
}

export default SliceImage
