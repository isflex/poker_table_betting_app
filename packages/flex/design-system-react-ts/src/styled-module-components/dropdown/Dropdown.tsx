import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { DropdownWebProps } from './DropdownProps'
import { is } from 'flex-design-system-react-ts/services'

/**
 * Dropdown Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode} Dropdown Children
 * @param active {boolean} Activated Dropdown
 */
const Dropdown = ({ className, children, active, ...others }: DropdownWebProps): React.JSX.Element => {
  const [displayDropdown, setDisplayDropdown] = useState<boolean>(active || false)

  const classes = classNames('dropdown tile', displayDropdown && is('active'), className)

  useEffect(() => {
    setDisplayDropdown(active || false)
  }, [active])

  return (
    <div className='field'>
      <div className='control'>
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
