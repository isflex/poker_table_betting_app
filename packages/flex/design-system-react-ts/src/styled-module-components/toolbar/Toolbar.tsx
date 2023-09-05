import React from 'react'
import classNames from 'classnames'
import { ToolbarWebProps } from './ToolbarProps'
import { has } from 'flex-design-system-react-ts/services'

/**
 * Toolbar Component
 * @param className {string} Additionnal CSS Classes
 * @param background {BackgroundStyle} Custom background color
 */
const Toolbar = ({ className, background, ...others }: ToolbarWebProps): React.JSX.Element => {
  const classes = classNames('toolbar', background && has(background.getClassName()), className)

  return <div className={classes} {...others} />
}

export default Toolbar
