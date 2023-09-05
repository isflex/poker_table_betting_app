import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
// import { camelCase } from 'lodash'
import { DropdownMenuWebProps } from './DropdownMenuProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Dropdown Menu Component
 * @param children {ReactNode} Children for Dropdown menu (Dropdown item)
 * @param className {string} Additionnal CSS Classes
 * @param classList {array} Additionnal css classes
 */
const DropdownMenu = ({ children, className, classList, ...others }: DropdownMenuWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.dropdownMenu,
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      <div className={styles.dropdownContent}>{children}</div>
    </div>
  )
}

export default DropdownMenu
