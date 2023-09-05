import React from 'react'
import classNames from 'classnames'
import { TableTrProps } from './TableTrProps'
import { is } from '../../../services/classify'

/**
 * Table TR Component
 * @param expandable {boolean} Lines can display additional information
 * @param expanded {boolean} An unfolded line will also receive class
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const TableTr = ({ className, expandable, expanded, ...others }: TableTrProps): JSX.Element => {
  const classes = classNames(className, expandable && is('expandable'), expanded && is('expanded'))

  return <tr className={classes} {...others} />
}

export default TableTr
