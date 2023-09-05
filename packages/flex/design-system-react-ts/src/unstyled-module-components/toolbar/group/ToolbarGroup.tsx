import React from 'react'
import classNames from 'classnames'
import { ToolbarGroupWebProps } from './ToolbarGroupProps'
import { is } from '../../../services/classify'

/**
 * Toolbar Group
 * @param className {string} Additionnal CSS Classes
 * @param elastic {boolean} Is elastic
 */
const ToolbarGroup = ({ className, elastic, ...others }: ToolbarGroupWebProps): JSX.Element => {
  const classes = classNames('toolbar-group', elastic && is('elastic'), className)

  return <div className={classes} {...others} />
}

export default ToolbarGroup
