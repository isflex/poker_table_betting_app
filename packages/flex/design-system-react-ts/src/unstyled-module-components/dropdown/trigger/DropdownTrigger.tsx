import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { DropdownTriggerWebProps } from './DropdownTriggerProps'
import { has, is } from '../../../services'

/**
 * Dropdown Trigger Component
 * @param className {string} Additionnal CSS Classes
 * @param active {boolean} Active trigger
 * @param onClick {onClick} onClick event
 * @param label {string} Trigger label
 * @param placeholder {string} Trigger placeholder
 */
const DropdownTrigger = ({
  className,
  active,
  onClick,
  label,
  placeholder,
  ...others
}: DropdownTriggerWebProps): JSX.Element => {
  const [triggered, setTriggered] = useState<boolean>(active || false)

  const classes = classNames('dropdown-trigger', triggered && is('triggered'), className)

  useEffect(() => {
    setTriggered(active || false)
  }, [active])

  return (
    <div
      onClick={(e: React.MouseEvent) => {
        const target = e.target as HTMLFormElement
        setTriggered(!triggered)
        target.active = !triggered
        if (onClick) {
          onClick({
            active: target.active,
          })
        }
      }}
      className={classes}
      {...others}
    >
      <div className='field'>
        <div className={`control ${has('dynamic-placeholder')}`}>
          <div className='select'>
            <select placeholder={placeholder} />
            <label className='input-dynamic-placeholder'>{label}</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropdownTrigger
