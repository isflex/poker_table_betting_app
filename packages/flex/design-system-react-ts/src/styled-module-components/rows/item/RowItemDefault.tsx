import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { RowsItemProps } from './RowItemProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Rows Item Component
 * @param narrow {boolean} Align same elements horizontaly
 * - -------------------------- WEB PROPERTIES -------------------
 *  @param className {string} additionnal CSS Classes
 */
const RowItem = ({ className, classList, narrow, ...others }: RowsItemProps): React.JSX.Element => {
  const classes = classNames(
    styles.row,
    narrow && styles.isNarrow,
    className,
    validate(classList)
  )

  return <div className={classes} {...others} />
}

export default RowItem
