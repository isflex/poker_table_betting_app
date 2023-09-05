import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { ToolbarItemWebProps } from './ToolbarItemProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Toolbar Item Component
 * @param className {string} Additionnal CSS Classes
 * @param clippedToBottom {boolean} Is clipped to bottom
 */
const ToolbarItem = ({ className, classList, clippedToBottom, ...others }: ToolbarItemWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.toolbarItem,
    clippedToBottom && styles.isClippedToBottom,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default ToolbarItem
