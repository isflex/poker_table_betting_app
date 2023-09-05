import React from 'react'
import classNames from 'classnames'
import { nanoid } from 'nanoid'
import { validate } from 'flex-design-system-react-ts/services'
import { SelectProps } from './SelectProps'
import SelectOption from './option'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

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
  classList,
  dynamicPlaceholder,
  name,
  id,
  label,
  value,
  onChange,
  placeholder,
  nullable,
  ...others
}: SelectProps): React.JSX.Element => {
  const classes = classNames(
    styles.select,
    className,
    validate(classList)
  )

  const controlClasses = classNames(
    styles.control,
    dynamicPlaceholder && label && styles.hasDynamicPlaceholder
  )

  const idGenerated = nanoid()

  return (
    <div className={styles.field}>
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
            id={id || idGenerated}
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
          {dynamicPlaceholder && label && <label htmlFor={id || idGenerated}>{label}</label>}
        </div>
      </div>
    </div>
  )
}

export default Select
