import React from 'react'
import classNames from 'classnames'
import { ListItemProps } from './ListItemProps'
import { Icon, IconSize } from '../../icon'

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 */

const ListItem = ({ className, children, customIcon, status, title, description }: ListItemProps): JSX.Element => {
  const classes = classNames(className)

  if (customIcon) {
    return (
      <li className={classes}>
        <Icon
          className={classNames({
            'is-danger': status === 'danger',
            'is-success': status === 'success',
          })}
          name={customIcon}
          size={IconSize.SMALL}
        />
        <span>{children}</span>
      </li>
    )
  }

  if (title || description) {
    return (
      <li className={classes}>
        <b>{title}</b>
        <p>{children || description}</p>
        <br />
      </li>
    )
  }

  return <li className={classes}>{children}</li>
}

export default ListItem
