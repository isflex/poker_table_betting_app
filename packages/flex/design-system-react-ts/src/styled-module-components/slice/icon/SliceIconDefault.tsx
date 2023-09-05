import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { SliceIconProps } from './SliceIconProps'
import { Icon } from '../../icon'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Slice Icon Component
 * @param className {string} Additionnal CSS Classes
 * @param iconSize {IconSize} Size for icon
 * @param iconName {IconName} Name for icon
 * @param iconColor {IconColor} Custom color for icon
 */
const SliceIcon = ({ className, classList, iconSize, iconName, iconColor, ...others }: SliceIconProps): React.JSX.Element => {
  const classes = classNames(
    styles.sliceIcon,
    className,
    validate(classList)
  )

  return (
    <div className={classes} {...others}>
      <Icon name={iconName} {...(iconColor && { color: iconColor })} {...(iconSize && { size: iconSize })} />
    </div>
  )
}

export default SliceIcon
