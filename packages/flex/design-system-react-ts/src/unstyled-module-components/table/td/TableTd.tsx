import React from 'react'
import classNames from 'classnames'
import { TableTdProps } from './TableTdProps'

/**
 * Table TD Component
 * @param children {ReactNode} Table TD children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param rowSpan {number} Specifies the number of rows a cell should span
 * @param colSpan {number} Defines the number of columns a cell should span
 */
const TableTd = ({ className, rowSpan, colSpan, ...others }: TableTdProps): JSX.Element => {
  const classes = classNames(className)

  return <td className={classes} rowSpan={rowSpan} colSpan={colSpan} {...others} />
}

export default TableTd
