import React from 'react'
import classNames from 'classnames'
import { TableProps } from './TableProps'
import { is } from 'flex-design-system-react-ts/services'

/**
 * Table Component
 * @param bordered {boolean} bordered table
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param fullwidth {boolean} Fullwidth table
 * @param comparative {boolean} If specific design add this
 */
const Table = ({ className, fullwidth, bordered, comparative, ...others }: TableProps): React.JSX.Element => {
  const classes = classNames(
    'table',
    fullwidth && is('fullwidth'),
    bordered && is('bordered'),
    comparative && is('comparative'),
    className,
  )

  return <table className={classes} {...others} />
}

export default Table
