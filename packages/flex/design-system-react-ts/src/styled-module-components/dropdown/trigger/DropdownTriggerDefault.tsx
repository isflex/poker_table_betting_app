import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
// import { camelCase } from 'lodash'
import { DropdownTriggerWebProps } from './DropdownTriggerProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Dropdown Trigger Component
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 * @param active {boolean} Active trigger
 * @param onClick {onClick} onClick event
 * @param label {string} Trigger label
 * @param placeholder {string} Trigger placeholder
 */
const DropdownTrigger = ({
  className,
  classList,
  active,
  onClick,
  label,
  placeholder,
  ...others
}: DropdownTriggerWebProps): React.JSX.Element => {
  const [triggered, setTriggered] = useState<boolean>(active || false)

  const classes = classNames(
    styles.dropdownTrigger,
    triggered && is('triggered'),
    className,
    validate(classList)
  )

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
      <div className={styles.field}>
        <div className={classNames(styles.control, styles.hasDynamicPlaceholder)}>
          <div className={styles.select}>
            <select placeholder={placeholder} />
            <label className={styles.inputDynamicPlaceholder}>{label}</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropdownTrigger
