import React from 'react'
import classNames from 'classnames'
import { validate } from 'flex-design-system-react-ts/services'
import { TableTdProps } from './TableTdProps'

// ///////////////////////////////////////////////////////////////////////////
// /!\ When typed-scss-modules --exportType default
// import styles from 'flex-design-system-framework/all.module.scss'
// import styles, { Styles } from 'flex-design-system-framework/all.module.scss'
// ///////////////////////////////////////////////////////////////////////////

/**
 * Table TD Component
 * @param children {ReactNode} Table TD children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal css classes
 * @param classList {array} Additionnal css classes
 * @param rowSpan {number} Specifies the number of rows a cell should span
 * @param colSpan {number} Defines the number of columns a cell should span
 */
const TableTd = ({ className, classList, rowSpan, colSpan, ...others }: TableTdProps): React.JSX.Element => {
  const classes = classNames(className, validate(classList))

  return <td className={classes} rowSpan={rowSpan} colSpan={colSpan} {...others} />
}

export default TableTd
