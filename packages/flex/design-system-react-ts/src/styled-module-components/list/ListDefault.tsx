import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { ListProps } from './ListProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * ListItem Component
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 */

const List = ({ className, classList, hasIcon, children, ...others }: ListProps): React.JSX.Element => {
  const classes = classNames(
    hasIcon && styles.iconList,
    className,
    validate(classList)
  )

  return (
    <ul className={classes} {...others}>
      {children}
    </ul>
  )
}

export default List
