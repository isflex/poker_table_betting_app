import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import classNames from 'classnames'
import { SwitchProps } from './SwitchProps'
import { is } from '../../services/classify'

/**
 * Switch Component
 * @param id {string} Is auto generate by default
 * @param label {string} Switch label
 * @param value {string} Switch value
 * @param checked {boolean} Checked switch
 * @param onChange {Function} onChange event
 * @param alert {AlertState} Alert Variant (INFO|SUCCESS|WARNING|DANGER)
 * @param disabled {boolean} Switch disabled
 * @param readonly {boolean} Switch readonly
 * @param name {string} Switch name
 * @param inverted {boolean} Invert switch color
 * -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const Switch = ({
  className,
  id = nanoid(),
  label,
  value,
  checked,
  onChange,
  alert,
  disabled,
  readonly,
  name,
  inverted,
  ...others
}: SwitchProps): JSX.Element => {
  const [_checked, setChecked] = useState<boolean>(checked || false)

  React.useEffect(() => {
    setChecked(checked || false)
  }, [checked])

  const classes = classNames(
    is('switch'),
    is('checkradio'),
    alert && is(alert.getClassName()),
    disabled && is(`${disabled}`),
    inverted && is('inverted'),
    className,
  )

  useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  return (
    <div className='field'>
      <div className='control'>
        <input
          onChange={(e) => {
            if (!readonly) {
              setChecked(!_checked)
            }
            if (onChange) {
              onChange({ switchState: e.target.checked, switchName: e.target.name })
            }
          }}
          name={name}
          value={value}
          checked={readonly ? checked : _checked}
          readOnly={readonly}
          className={classes}
          id={`switch-${id}`}
          type='checkbox'
          {...others}
        />
        <label htmlFor={`switch-${id}`}>{label}</label>
      </div>
    </div>
  )
}

export default Switch
