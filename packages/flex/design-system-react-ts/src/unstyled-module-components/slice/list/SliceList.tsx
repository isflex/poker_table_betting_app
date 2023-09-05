import React from 'react'
import classNames from 'classnames'
import { SliceListProps } from './SliceListProps'
import { is } from '../../../services/classify'

/**
 * Slice List Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for SliceList (Slice)
 * @param transparent {boolean} Apply transparent on Slices container
 * @param selectable {boolean} List of checkable Slice
 */
const SliceList = ({ children, className, transparent, selectable, ...others }: SliceListProps): JSX.Element => {
  const classes = classNames('slices', transparent && is('transparent'), selectable && 'slice-select', className)

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default SliceList
