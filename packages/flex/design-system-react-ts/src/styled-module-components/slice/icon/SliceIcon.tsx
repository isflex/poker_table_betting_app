import React from 'react'
import classNames from 'classnames'
import { SliceIconProps } from './SliceIconProps'
import { Icon } from '../../icon'

/**
 * Slice Icon Component
 * @param className {string} Additionnal CSS Classes
 * @param iconSize {IconSize} Size for icon
 * @param iconName {IconName} Name for icon
 * @param iconColor {IconColor} Custom color for icon
 */
const SliceIcon = ({ className, iconSize, iconName, iconColor, ...others }: SliceIconProps): React.JSX.Element => {
  const classes = classNames('slice-icon', className)

  return (
    <div className={classes} {...others}>
      <Icon name={iconName} {...(iconColor && { color: iconColor })} {...(iconSize && { size: iconSize })} />
    </div>
  )
}

export default SliceIcon
