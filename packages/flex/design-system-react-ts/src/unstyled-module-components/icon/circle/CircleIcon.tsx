import React from 'react'
import classNames from 'classnames'
import { IconProps } from '../IconProps'
import { IconStatus } from '../IconEnum'
import { getStatusBackground, is } from '../../../services/index'

const CircleIcon = ({
  className, name, status, size, ...others
// }: IconProps): React.JSX.Element => {
}: IconProps): React.JSX.Element & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> => {
  const background = getStatusBackground(status || '', IconStatus.TERTIARY)
  const classes = classNames(
    {
      icon: true,
      'has-text-white': true,
      [is(`${size}`)]: size,
    },
    [is('circled')],
    background,
    className,
  )
  return (
    <span className={classes} {...others}>
      <i className={name} />
    </span>
  )
}

export default CircleIcon
