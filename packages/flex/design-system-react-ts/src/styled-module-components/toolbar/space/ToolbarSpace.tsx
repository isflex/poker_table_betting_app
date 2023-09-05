import React from 'react'
import classNames from 'classnames'
import { ToolbarSpaceWebProps } from './ToolbarSpaceProps'

/**
 * Toolbar Space Component
 * @param className {string} Additionnal CSS Classes
 */
const ToolbarSpace = ({ className, ...others }: ToolbarSpaceWebProps): JSX.Element => (
  <div className={classNames('toolbar-space', className)} {...others} />
)

export default ToolbarSpace
