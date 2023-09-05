import React from 'react'
import classNames from 'classnames'
import { getStatusBackground, is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { IconProps } from '../IconProps'
import { IconStatus } from '../IconEnum'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

const CircleIcon = ({
  className, classList, name, status, size, ...others
}: IconProps): React.JSX.Element => {
// }: IconProps): React.JSX.Element | React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> => {
  const background = getStatusBackground(status || '', IconStatus.TERTIARY)
  const classes = classNames(
    styles.icon,
    styles.hasTextWhite,
    styles[camelCase(is(`${size}`)) as keyof Styles],
    styles.isCircled,
    styles[camelCase(background) as keyof Styles],
    className,
    validate(classList)
  )

  const iconName = styles[camelCase(name) as keyof Styles]

  return (
    <span className={classes} {...others}>
      <i className={iconName} />
    </span>
  )
}

export default CircleIcon
