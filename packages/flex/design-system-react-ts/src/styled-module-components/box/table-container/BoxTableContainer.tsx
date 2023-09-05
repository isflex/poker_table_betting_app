import React from 'react'
import classNames from 'classnames'
import { BoxTableContainerProps } from './BoxTableContainerProps'

/**
 * Box Table Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Children
 */
const BoxTableContainer = ({ className, ...others }: BoxTableContainerProps): JSX.Element => (
  <div className={classNames('box table-container', className)} {...others} />
)

export default BoxTableContainer
