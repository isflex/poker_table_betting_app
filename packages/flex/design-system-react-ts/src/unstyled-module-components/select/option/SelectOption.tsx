import React from 'react'
import classNames from 'classnames'
import { SelectOptionProps } from './SelectOptionProps'

/**
 * Select Option Component
 * @param selected {boolean} Selected option
 * @param value {string} Select option value
 * @param id {string} Select option custom id
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param placeholder Select Option Placeholder
 */
const SelectOption = ({ id, className, selected, value, disabled, ...others }: SelectOptionProps): JSX.Element => {
  return (
    <option
      id={id}
      className={classNames(className)}
      selected={selected}
      value={value}
      disabled={disabled}
      {...others}
    />
  )
}

export default SelectOption
