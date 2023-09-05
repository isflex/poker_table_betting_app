import React from 'react'
import classNames from 'classnames'
import { nanoid } from 'nanoid'
import { validate } from 'flex-design-system-react-ts/services'
import { SelectOptionProps } from './SelectOptionProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Select Option Component
 * @param selected {boolean} Selected option
 * @param value {string} Select option value
 * @param id {string} Select option custom id
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param placeholder Select Option Placeholder
 */
const SelectOption = ({ id, className, classList, selected, value, disabled, ...others }: SelectOptionProps): React.JSX.Element => {

  const idGenerated = nanoid()

  return (
    <option
      id={id || idGenerated}
      className={classNames(className, validate(classList))}
      selected={selected}
      value={value}
      disabled={disabled}
      {...others}
    />
  )
}

export default SelectOption
