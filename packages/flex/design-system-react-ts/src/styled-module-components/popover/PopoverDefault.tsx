import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { PopoverWebProps } from './PopoverProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Popover Component
 * @param children {ReactNode} Popover children
 * @param className {string} Additionnal CSS Classes
 * @param direction {PopoverDirection} Popover direction (DOWN|LEFT|RIGHT)
 * @param children {ReactNode} Content React Node Element
 * @param content {ReactNode} Content of the popover (hidden popover if null|undefined)
 * @param active {boolean} Is the popover active
 * @param arrowPosition {PopoverArrowPosition} Position of the popover arrow
 */
const Popover = ({
  className,
  classList,
  direction,
  children,
  active,
  arrowPosition,
  content,
  ...others
}: PopoverWebProps): React.JSX.Element => {
  const classes = classNames(
    styles.popover,
    direction != null && styles[camelCase(is(`popover-${direction}`)) as keyof Styles],
    active && styles.isPopoverActive,
    arrowPosition != null && styles[camelCase(is(`arrow-${arrowPosition}`)) as keyof Styles],
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      {children}
      {content != null && <div className={styles.popoverContent}>{content}</div>}
    </div>
  )
}

export default Popover
