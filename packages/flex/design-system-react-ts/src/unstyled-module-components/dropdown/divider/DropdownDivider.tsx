import React from 'react'
import classNames from 'classnames'
import { DropdownDividerWebProps } from './DropdownDividerProps'
import { is } from '../../../services'

/**
 * Dropdown Divider Component
 * @param className {string} Additionnal CSS Classes
 */
const DropdownDivider = ({ className, ...others }: DropdownDividerWebProps): JSX.Element => {
  const classes = classNames('dropdown-divider', is('divider'), className)

  return <hr className={classes} {...others} />
}

export default DropdownDivider
