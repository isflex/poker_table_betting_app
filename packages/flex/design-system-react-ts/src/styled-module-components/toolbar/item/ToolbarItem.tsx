import React from 'react'
import classNames from 'classnames'
import { ToolbarItemWebProps } from './ToolbarItemProps'
import { is } from '../../../services/classify'

/**
 * Toolbar Item Component
 * @param className {string} Additionnal CSS Classes
 * @param clippedToBottom {boolean} Is clipped to bottom
 */
const ToolbarItem = ({ className, clippedToBottom, ...others }: ToolbarItemWebProps): React.JSX.Element => {
  const classes = classNames('toolbar-item', clippedToBottom && is('clipped-to-bottom'), className)
  return <div className={classes} {...others} />
}

export default ToolbarItem
