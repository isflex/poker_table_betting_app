import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
// import { camelCase } from 'lodash'
import { DropdownWebProps } from './DropdownProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Dropdown Component
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 * @param children {ReactNode} Dropdown Children
 * @param active {boolean} Activated Dropdown
 */
const Dropdown = ({ className, classList, children, active, ...others }: DropdownWebProps): React.JSX.Element => {
  const [displayDropdown, setDisplayDropdown] = useState<boolean>(active || false)

  const classes = classNames(
    styles.dropdown,
    styles.tile,
    displayDropdown && styles.isActive,
    className,
    validate(classList)
  )

  useEffect(() => {
    setDisplayDropdown(active || false)
  }, [active])

  return (
    <div className={styles.field}>
      <div className={styles.control}>
        <div
          onClick={() => {
            setDisplayDropdown(!displayDropdown)
          }}
          className={classes}
          {...others}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
