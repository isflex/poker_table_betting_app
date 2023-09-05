/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { nanoid } from 'nanoid'
import { camelCase } from 'lodash'
import { SwitchProps } from './SwitchProps'
import { is } from 'flex-design-system-react-ts/services'

/////////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// [Does it work : web yes]
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
/////////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType named && webpack -> loader: 'css-loader' -> options -> modules -> namedExport: false
// [Does it work : web no]
// // // if exportOnlyLocals true
// import { default as locals } from '@flex-design-system/framework/switch.module.scss'
// // // if exportOnlyLocals false
// import { default as styles } from '@flex-design-system/framework/switch.module.scss'
// const { locals } = styles
/////////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType named && webpack -> loader: 'css-loader' -> options -> modules -> namedExport: true,
// [Does it work : web yes]
// import { field, control, isSwitch, isCheckradio, isInverted } from '@flex-design-system/framework/switch.module.scss'

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
  id,
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
}: SwitchProps): React.JSX.Element => {
  const [_checked, setChecked] = useState<boolean>(checked || false)

  useEffect(() => {
    setChecked(checked || false)
  }, [checked])

  const classes = classNames(
    styles.isSwitch,
    styles.isCheckradio,
    alert && styles[camelCase(is(alert.getClassName())) as keyof Styles],
    disabled && camelCase(is(`${disabled}`)),
    inverted && styles.isInverted,
    className,
    className
  )

  useEffect(() => {
    if (!readonly) {
      setChecked(checked || false)
    }
  }, [checked, readonly])

  const idGenerated = nanoid()

  return (
    <div className={styles.field}>
      <div className={styles.control}>
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
          id={`switch-${id || idGenerated}`}
          type='checkbox'
          {...others}
        />
        <label htmlFor={`switch-${id || idGenerated}`}>{label}</label>
      </div>
    </div>
  )
}

export default Switch
