import React from 'react'
import classNames from 'classnames'
import { SelectProps } from './SelectProps'
import { has } from '../../services/classify'
import SelectOption from './option'

/**
 * Select Component
 * @param children {ReactNode} Children for Select
 * @param dynamicPlaceholder {boolean} Dynamic placeholder
 * @param id {string} Select id
 * @param name {string} Select name
 * @param label {string} Select label
 * @param value {string} Select value
 * @param onChange {Function} onChange Event
 * @param onClick {Function} onClick Event
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param placeholder {string} Select Placeholder
 * @param className {string} Additionnal CSS Classes
 * @param nullable {boolean} placeholder became a selectable option, as null value
 * @param others
 */
const Select = ({
  children,
  className,
  dynamicPlaceholder,
  name,
  id,
  label,
  value,
  onChange,
  placeholder,
  nullable,
  ...others
}: SelectProps): JSX.Element => {
  const classes = classNames('select', className)

  const controlClasses = classNames('control', dynamicPlaceholder && label && has('dynamic-placeholder'))

  return (
    <div className='field'>
      <div className={controlClasses}>
        <div className={classes}>
          <select
            /* eslint-disable  @typescript-eslint/no-explicit-any */
            onChange={(e: any) => {
              if (e.target.firstChild && !nullable && !!placeholder) e.target.firstChild.style.display = 'none'
              const target = e.target as HTMLInputElement
              if (onChange) {
                onChange({
                  selectValue: target.value,
                  selectName: target.name,
                  selectId: target.id,
                })
              }
            }}
            value={value}
            id={id}
            name={name}
            {...others}
          >
            {!!placeholder && (
              <SelectOption selected={value == null} disabled={!nullable}>
                {placeholder}
              </SelectOption>
            )}
            {children}
          </select>
          {dynamicPlaceholder && label && <label>{label}</label>}
        </div>
      </div>
    </div>
  )
}

export default Select
