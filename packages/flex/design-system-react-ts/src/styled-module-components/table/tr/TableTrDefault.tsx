import React from 'react'
import classNames from 'classnames'
import { is, validate } from 'flex-design-system-react-ts/services'
import { camelCase } from 'lodash'
import { TableTrProps } from './TableTrProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Table TR Component
 * @param expandable {boolean} Lines can display additional information
 * @param expanded {boolean} An unfolded line will also receive class
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 */
const TableTr = ({ className, classList, expandable, expanded, ...others }: TableTrProps): React.JSX.Element => {
  const classes = classNames(
    expandable && styles[camelCase(is('expandable')) as keyof Styles],
    expanded && styles[camelCase(is('expanded')) as keyof Styles],
    className,
    validate(classList),
  )

  return <tr className={classes} {...others} />
}

export default TableTr
