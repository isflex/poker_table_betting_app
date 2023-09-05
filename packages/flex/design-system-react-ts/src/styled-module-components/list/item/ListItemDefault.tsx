import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { ListItemProps } from './ListItemProps'
import { Icon, IconSize } from '../../icon'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * ListItem Component
 * @param className {string} Additionnal CSS Classes
 */

const ListItem = ({ className, classList, children, customIcon, status, title, description }: ListItemProps): React.JSX.Element => {
  const classes = classNames(
    className,
    validate(classList)
  )

  if (customIcon) {
    return (
      <li className={classes}>
        <Icon
          className={classNames({
            // 'is-danger': status === 'danger',
            // 'is-success': status === 'success',
            [styles.isDanger]: status === 'danger',
            [styles.isSuccess]: status === 'success',
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
