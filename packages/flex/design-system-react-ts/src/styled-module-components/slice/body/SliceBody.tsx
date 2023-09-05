import React from 'react'
import classNames from 'classnames'
import { SliceBodyProps } from './SliceBodyProps'
// import { has, is } from '../../services/classify'

/**
 * Slice Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children for Slice
 */
const SliceBody = ({ children, className, ...others }: SliceBodyProps): React.JSX.Element => {
  const classes = classNames('slice-body', className)

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  )
}

export default SliceBody
