import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Text } from '../text'
import { TextareaProps } from './TextareaProps'
import { is, has } from '../../services'

/**
 * Textarea Component
 * @param disabled {boolean} Disabled textarea
 * @param onChange {Function} OnChange textarea Event
 * @param placeholder {string} Placeholder textarea
 * @param defaultValue {string} Default Value for textarea
 * @param help {string} Help for textarea
 * @param ref Pass a ref for textarea
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param hovered {boolean} Hover mode
 * @param focused {boolean} Fucus mode
 * - -------------------------- NATIVE PROPERTIES -------------------------------
 * @param keyboardStyle {InputKeyboardAppearance} Custom appearance for keyboard
 * @param autoCapitalize {InputAutoCapitalize} Capitalize => NONE | SENTENCES | WORDS | CHARS
 * @param autoCorrect {boolean} Auto correct sentence
 * @param autoCompleteType {InputAutoCompleteType} Auto complete input type
 * @param textContentType {InputTextContentType} Give the keyboard and the system information
 * @param keyboardType {InputKeyboardType} Keybaord type
 */
const Textarea = ({
  className,
  disabled,
  onChange,
  focused,
  placeholder,
  defaultValue,
  hovered,
  name,
  help,
  ref,
  ...others
}: TextareaProps): JSX.Element => {
  const [value, setValue] = useState(defaultValue || '')

  useEffect(() => {
    setValue(defaultValue || '')
  }, [defaultValue])

  const wrapperClasses = classNames('field', className)

  const controlClasses = classNames('control', has('dynamic-placeholder'), {
    [is('disabled')]: disabled,
  })

  const classes = classNames('textarea', hovered && !focused && is('hovered'), focused && !hovered && is('focused'))

  return (
    <div className={wrapperClasses}>
      <div className={controlClasses}>
        <textarea
          {...others}
          className={classes}
          value={value}
          name={name}
          ref={ref}
          onChange={(e) => {
            setValue(e.target.value)
            if (onChange) {
              onChange({
                textareaName: e.target.name,
                textareaValue: e.target.value,
              })
            }
          }}
          placeholder={placeholder}
        />
        <label>{placeholder}</label>
      </div>
      {help && <Text className={'help'}>{help}</Text>}
    </div>
  )
}

export default Textarea
